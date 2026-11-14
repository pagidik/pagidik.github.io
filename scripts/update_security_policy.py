#!/usr/bin/env python3
"""Regenerate static-page CSP hashes after editing inline scripts.

GitHub Pages does not provide a repository-level response-header configuration.
This meta policy covers page content; see SECURITY.md for edge-only protections.
"""

import base64
import hashlib
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
POLICY_RE = re.compile(r'^[ \t]*<meta http-equiv="Content-Security-Policy"[^>]*>\r?\n', re.M)
REFERRER_RE = re.compile(r'^[ \t]*<meta name="referrer"[^>]*>\r?\n', re.M)


def policy_for(html):
    hashes = []
    for attributes, code in re.findall(r'<script\b([^>]*)>(.*?)</script>', html, re.S | re.I):
        if not re.search(r'\bsrc\s*=', attributes, re.I) and code.strip():
            # HTML parsing normalizes CRLF before the browser checks a script hash.
            code = code.replace('\r\n', '\n').replace('\r', '\n')
            digest = base64.b64encode(hashlib.sha256(code.encode()).digest()).decode()
            hashes.append(f"'sha256-{digest}'")
    scripts = ["'self'", *hashes]
    if 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js' in html:
        scripts.append('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
    return '; '.join([
        "default-src 'self'",
        'script-src ' + ' '.join(scripts),
        "script-src-attr 'none'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://blog-assets.solidworks.com https://datawrapper.dwcdn.net",
        "connect-src 'self'",
        "frame-src 'self'",
        "object-src 'none'",
        "base-uri 'none'",
        "form-action 'none'",
    ])


def updated_html(html):
    html = POLICY_RE.sub('', REFERRER_RE.sub('', html))
    tags = ('    <meta http-equiv="Content-Security-Policy" content="' + policy_for(html) + '">\n'
            '    <meta name="referrer" content="strict-origin-when-cross-origin">\n')
    return re.sub(r'(<meta\s+charset=[^>]+>\r?\n)', lambda m: m[0] + tags, html, count=1, flags=re.I)


if __name__ == '__main__':
    for path in sorted(ROOT.rglob('*.html')):
        if '.git' not in path.parts:
            # Preserve original line endings outside the added policy.
            original = path.read_bytes().decode('utf-8')
            updated = updated_html(original)
            if updated != original:
                path.write_bytes(updated.encode('utf-8'))
                print(path.relative_to(ROOT))
