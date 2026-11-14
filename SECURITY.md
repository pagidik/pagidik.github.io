# Website security notes

This is a static portfolio served by GitHub Pages behind Cloudflare. It has no
site login, payment flow, database, or working contact-form endpoint.

## Content protections

- HTML pages use a Content Security Policy that limits scripts to this origin,
  hashes the existing inline scripts, and disables inline event handlers,
  plugins, base-URL overrides, and form submissions.
- Google Fonts and the existing article-image hosts remain explicitly allowed.
  Inline CSS remains allowed to preserve the current design. This is not a fully
  strict CSP; remove inline styles in a separate design-preserving refactor.
- The two legacy pages loading Three.js use the exact existing version with
  Subresource Integrity. No new CDN or dependency is introduced.
- Blog metadata is escaped and original-source links accept HTTPS URLs only.
  Article bodies are trusted HTML maintained in `blogs/blog-data.js`, not user
  input. Do not connect an untrusted CMS or remote feed to that field without a
  vetted HTML sanitizer and a new security review.

After changing an inline script, run `python scripts/update_security_policy.py`.
Run `python scripts/check_site.py` and `node scripts/test_blog.js` before
publishing. The site has no build step.

## Hosting follow-up (not applied by this change)

The observed public HTTP endpoint returned 200 on 2026-11-14 rather than
redirecting to HTTPS. The HTTPS response did not include HSTS, CSP,
X-Content-Type-Options, X-Frame-Options, or Permissions-Policy headers.
These observations are configuration hardening gaps, not evidence of compromise.

Review the GitHub Pages HTTPS setting and Cloudflare edge configuration:

1. Redirect HTTP to HTTPS on both the apex and www hosts and verify each route.
2. After confirming HTTPS works on all required hosts, enable HSTS with a staged
   max-age. Do not add includeSubDomains or preload without a full domain review.
3. Set `Content-Security-Policy: frame-ancestors 'none'` as a response header to
   prevent other sites framing the portfolio. Meta CSP cannot enforce this.
4. Add `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`,
   `Referrer-Policy: strict-origin-when-cross-origin`, and
   `Permissions-Policy: camera=(), microphone=(), geolocation=()` at the edge.
5. Review GitHub/Cloudflare account MFA, deployment permissions, and domain
   verification in the owner accounts. This audit did not inspect those settings.

Do not treat this review as a penetration-test certification. It is a source and
public-response review, with no destructive testing or authentication testing.

References:
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
