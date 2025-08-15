#!/usr/bin/env python3
"""
Utility script to generate a file index for the Shopify theme audit.

This script walks the repository tree starting at the current working
directory and collects metadata for each file not excluded by the
guardrail patterns. For every file it records the relative path from
the repository root, file size in bytes, detected extension, and the
first three lines of text if the file appears to be text. Binary
files have their first‑three lines field left blank.

Excluded patterns (from guardrails):
  - node_modules/**
  - .git/**
  - dist/**
  - build/**

The resulting index is written to `docs/audit/file-index.md`. If the
output directory does not already exist it is created.

"""
from __future__ import annotations

import fnmatch
import os
from pathlib import Path

EXCLUDE_PATTERNS = [
    "node_modules/*", "node_modules/**",
    ".git/*", ".git/**",
    "dist/*", "dist/**",
    "build/*", "build/**",
]


def is_excluded(relative_path: str) -> bool:
    """Return True if the given relative path matches one of the exclude patterns."""
    for pattern in EXCLUDE_PATTERNS:
        if fnmatch.fnmatch(relative_path, pattern):
            return True
    parts = relative_path.split('/')
    if any(part.startswith('.git') for part in parts):
        return True
    return False


def get_file_info(file_path: Path, repo_root: Path) -> dict:
    """
    Collect metadata about a file.
    Returns a dictionary with keys: path, size, extension, lines.
    """
    relative_path = file_path.relative_to(repo_root).as_posix()
    size = file_path.stat().st_size
    ext = file_path.suffix.lstrip('.')
    first_three_lines = ""
    try:
        with file_path.open('r', encoding='utf-8') as f:
            lines = []
            for _ in range(3):
                line = f.readline()
                if not line:
                    break
                lines.append(line.rstrip('\n'))
            first_three_lines = "\n".join(lines)
    except (UnicodeDecodeError, PermissionError):
        first_three_lines = ""
    return {
        "path": relative_path,
        "size": size,
        "extension": ext,
        "lines": first_three_lines,
    }


def build_index(repo_root: Path) -> list[dict]:
    """Walk the repository and return a list of file info dictionaries."""
    index: list[dict] = []
    for path in repo_root.rglob('*'):
        if path.is_file():
            rel = path.relative_to(repo_root).as_posix()
            if is_excluded(rel):
                continue
            index.append(get_file_info(path, repo_root))
    index.sort(key=lambda entry: entry["path"])
    return index


def write_markdown(index: list[dict], output_path: Path) -> None:
    """Write the file index to a markdown file."""
    with output_path.open('w', encoding='utf-8') as md:
        md.write("# File Index\n\n")
        md.write(
            "The following table enumerates each file in the repository (excluding files "
            "matched by the guardrail patterns) along with its size, file extension, and "
            "a preview of its first three lines. Binary files have an empty preview.\n\n"
        )
        md.write("| Path | Size (bytes) | Extension | First three lines (truncated) |\n")
        md.write("|---|---|---|---|\n")
        for entry in index:
            preview = entry["lines"]
            if len(preview) > 120:
                preview = preview[:117] + "…"
            preview = preview.replace('|', '\\|')
            path = entry["path"].replace('|', '\\|')
            md.write(f"| {path} | {entry['size']} | {entry['extension']} | {preview} |\n")


def main() -> int:
    repo_root = Path(os.getcwd()).resolve()
    index = build_index(repo_root)
    docs_dir = repo_root / 'docs' / 'audit'
    docs_dir.mkdir(parents=True, exist_ok=True)
    output_file = docs_dir / 'file-index.md'
    write_markdown(index, output_file)
    print(f"Wrote file index to {output_file}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())