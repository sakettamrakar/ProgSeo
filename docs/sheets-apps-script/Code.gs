const HEADERS = [
  'command',
  'city_name',
  'state',
  'country',
  'category_name',
  'category_slug',
  'page_handle',
  'page_title',
  'seo_title',
  'seo_description',
  'h1',
  'intro_html',
  'body_html',
  'faq_json',
  'hero_image_url',
  'canonical_url',
  'warning'
];

const SLUG_FIELDS = ['page_handle', 'category_slug'];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_LENGTHS = {
  page_handle: 100,
  category_slug: 100,
  page_title: 70,
  seo_title: 60,
  seo_description: 160,
  h1: 70,
  intro_html: 5000,
  body_html: 20000,
  faq_json: 8000,
  hero_image_url: 2048,
  canonical_url: 2048
};

function doGet(e) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const values = sheet.getDataRange().getValues();

  if (values.length === 0) {
    return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.CSV);
  }

  const headerRow = values[0];
  const headerIndex = {};
  headerRow.forEach(function(h, i) {
    headerIndex[h] = i;
  });

  const rows = [];
  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    if (row.join('').trim() === '') continue; // skip empty rows
    const record = {};
    HEADERS.forEach(function(h) {
      record[h] = row[headerIndex[h]] || '';
    });

    const warnings = [];
    SLUG_FIELDS.forEach(function(field) {
      const val = record[field];
      if (val && !SLUG_REGEX.test(val)) {
        warnings.push(field + ' has invalid slug');
      }
    });

    Object.keys(MAX_LENGTHS).forEach(function(field) {
      const val = record[field];
      if (val && val.length > MAX_LENGTHS[field]) {
        warnings.push(field + ' exceeds ' + MAX_LENGTHS[field] + ' chars');
      }
    });

    record.warning = warnings.join('; ');
    rows.push(record);
  }

  const csvRows = [HEADERS.join(',')];
  rows.forEach(function(r) {
    const line = HEADERS.map(function(h) {
      return sanitize(r[h]);
    }).join(',');
    csvRows.push(line);
  });

  const output = csvRows.join('\n');
  return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.CSV);
}

function sanitize(value) {
  if (value == null) return '""';
  const str = String(value).replace(/\r?\n/g, ' ').replace(/"/g, '""').trim();
  return '"' + str + '"';
}
