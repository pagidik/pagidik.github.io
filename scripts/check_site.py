#!/usr/bin/env python3
"""Dependency-free checks for static links and security-policy regressions."""

from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlsplit

from update_security_policy import ROOT, policy_for


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


errors = []
pages = sorted(ROOT.rglob('*.html'))
for path in pages:
    html = path.read_bytes().decode('utf-8').replace('\r\n', '\n')
    parsed = Page()
    parsed.feed(html)
    name = path.relative_to(ROOT)
    policies = [a.get('content') for t, a in parsed.tags
                if t == 'meta' and a.get('http-equiv', '').lower() == 'content-security-policy']
    if policies != [policy_for(html)]:
        errors.append(f'{name}: missing or stale CSP; run update_security_policy.py')
    for tag, attrs in parsed.tags:
        if any(key.startswith('on') for key in attrs):
            errors.append(f'{name}: inline event handler')
        if tag == 'a' and attrs.get('target') == '_blank':
            if not {'noopener', 'noreferrer'} <= set(attrs.get('rel', '').split()):
                errors.append(f'{name}: new-tab link missing rel protections')
        if tag == 'script' and attrs.get('src', '').startswith('https://'):
            if not attrs.get('integrity') or attrs.get('crossorigin') != 'anonymous':
                errors.append(f'{name}: external script missing integrity protections')
        for attribute in ('href', 'src'):
            value = attrs.get(attribute, '')
            url = urlsplit(value)
            if url.scheme == 'http':
                errors.append(f'{name}: insecure {attribute}: {value}')
            if url.scheme or url.netloc or not url.path:
                continue
            target = (ROOT / unquote(url.path).lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path)
            if not target.exists():
                errors.append(f'{name}: missing local {attribute}: {value}')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'PASS: {len(pages)} HTML pages; CSP hashes, local targets, HTTPS links, and new-tab/CDN protections.')
