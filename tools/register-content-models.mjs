import fs from 'fs';
import path from 'path';

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    }
  }
}

loadEnv();

const { ADMIN_ACCESS_TOKEN, STORE_DOMAIN } = process.env;
if (!ADMIN_ACCESS_TOKEN || !STORE_DOMAIN) {
  console.error('ADMIN_ACCESS_TOKEN and STORE_DOMAIN must be set in .env');
  process.exit(1);
}

const API_VERSION = '2024-01';
const endpoint = `https://${STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`;

async function graphql(query, variables = {}, tries = 3) {
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
      });
      const json = await res.json();
      if (!res.ok || json.errors) {
        throw new Error(JSON.stringify(json.errors || json));
      }
      return json.data;
    } catch (err) {
      if (attempt === tries) throw err;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

async function ensureMetaobjectDefinition(type, name, fields, displayNameKey) {
  const query = `query($type: String!) {\n    metaobjectDefinitionByType(type: $type) {\n      id\n      fieldDefinitions { key }\n    }\n  }`;
  const data = await graphql(query, { type });
  let definitionId;
  if (!data.metaobjectDefinitionByType) {
    const createMutation = `mutation($definition: MetaobjectDefinitionInput!) {\n      metaobjectDefinitionCreate(definition: $definition) {\n        metaobjectDefinition { id }\n        userErrors { field message }\n      }\n    }`;
    const createInput = { name, type, fieldDefinitions: fields, displayNameKey };
    const res = await graphql(createMutation, { definition: createInput });
    const errors = res.metaobjectDefinitionCreate.userErrors;
    if (errors.length) throw new Error(JSON.stringify(errors));
    definitionId = res.metaobjectDefinitionCreate.metaobjectDefinition.id;
  } else {
    definitionId = data.metaobjectDefinitionByType.id;
    const existingKeys = data.metaobjectDefinitionByType.fieldDefinitions.map((f) => f.key);
    const missing = fields.filter((f) => !existingKeys.includes(f.key));
    if (missing.length) {
      const updateMutation = `mutation($id: ID!, $fieldDefinitions: [MetaobjectFieldDefinitionInput!]!) {\n        metaobjectDefinitionUpdate(id: $id, fieldDefinitions: $fieldDefinitions) {\n          metaobjectDefinition { id }\n          userErrors { field message }\n        }\n      }`;
      const res = await graphql(updateMutation, { id: definitionId, fieldDefinitions: missing });
      const errors = res.metaobjectDefinitionUpdate.userErrors;
      if (errors.length) throw new Error(JSON.stringify(errors));
    }
  }
  return definitionId;
}

async function ensurePageMetafieldDefinition(seoLandingDefId) {
  const query = `query($ownerType: MetafieldOwnerType!, $namespace: String!, $key: String!) {\n    metafieldDefinition(ownerType: $ownerType, namespace: $namespace, key: $key) { id }\n  }`;
  const data = await graphql(query, { ownerType: 'PAGE', namespace: 'custom', key: 'seo_landing_ref' });
  if (!data.metafieldDefinition) {
    const mutation = `mutation($definition: MetafieldDefinitionInput!) {\n      metafieldDefinitionCreate(definition: $definition) {\n        metafieldDefinition { id }\n        userErrors { field message }\n      }\n    }`;
    const definition = {
      name: 'SEO Landing',
      key: 'seo_landing_ref',
      namespace: 'custom',
      ownerType: 'PAGE',
      type: 'METAOBJECT_REFERENCE',
      validations: [{ name: 'metaobject_definition', value: seoLandingDefId }],
    };
    const res = await graphql(mutation, { definition });
    const errors = res.metafieldDefinitionCreate.userErrors;
    if (errors.length) throw new Error(JSON.stringify(errors));
  }
}

async function main() {
  const cityFields = [
    { name: 'Name', key: 'name', type: 'SINGLE_LINE_TEXT_FIELD', required: true },
    { name: 'State', key: 'state', type: 'SINGLE_LINE_TEXT_FIELD' },
    { name: 'Country', key: 'country', type: 'SINGLE_LINE_TEXT_FIELD' },
    { name: 'Blurb', key: 'blurb', type: 'MULTI_LINE_TEXT_FIELD' },
    { name: 'Hero Image', key: 'hero_image', type: 'FILE_REFERENCE' },
  ];
  const cityDefId = await ensureMetaobjectDefinition('city', 'City', cityFields, 'name');

  const categoryFields = [
    { name: 'Name', key: 'name', type: 'SINGLE_LINE_TEXT_FIELD', required: true },
    { name: 'Slug', key: 'slug', type: 'SINGLE_LINE_TEXT_FIELD', required: true },
    { name: 'Icon', key: 'icon', type: 'FILE_REFERENCE' },
    { name: 'Intro', key: 'intro', type: 'MULTI_LINE_TEXT_FIELD' },
  ];
  const categoryDefId = await ensureMetaobjectDefinition('category_token', 'Category Token', categoryFields, 'name');

  const seoLandingFields = [
    { name: 'City', key: 'city', type: 'METAOBJECT_REFERENCE', validations: [{ name: 'metaobject_definition', value: cityDefId }] },
    { name: 'Category', key: 'category', type: 'METAOBJECT_REFERENCE', validations: [{ name: 'metaobject_definition', value: categoryDefId }] },
    { name: 'H1', key: 'h1', type: 'SINGLE_LINE_TEXT_FIELD', required: true },
    { name: 'Intro HTML', key: 'intro_html', type: 'RICH_TEXT_FIELD' },
    { name: 'Body HTML', key: 'body_html', type: 'RICH_TEXT_FIELD' },
    { name: 'FAQ JSON', key: 'faq_json', type: 'JSON' },
    { name: 'Hero Image', key: 'hero_image', type: 'FILE_REFERENCE' },
    { name: 'SEO Title', key: 'seo_title', type: 'SINGLE_LINE_TEXT_FIELD' },
    { name: 'SEO Description', key: 'seo_description', type: 'MULTI_LINE_TEXT_FIELD' },
    { name: 'Schema Extra JSON', key: 'schema_extra_json', type: 'JSON' },
  ];
  const seoLandingDefId = await ensureMetaobjectDefinition('seo_landing', 'SEO Landing', seoLandingFields, 'h1');

  await ensurePageMetafieldDefinition(seoLandingDefId);
  console.log('Content models ensured.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
