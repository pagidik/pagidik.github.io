/* Run with node scripts/test_blog.js. No network or third-party test dependencies. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const code = fs.readFileSync(path.join(root, 'blogs/blog.js'), 'utf8');

function render(posts, pathname = '/blogs/', search = '') {
    const elements = Object.fromEntries(['blog-list', 'post-title', 'post-content', 'post-source-link', 'other-posts']
        .map(id => [id, { innerHTML: '', textContent: '', attributes: {}, setAttribute(k, v) { this.attributes[k] = v; } }]));
    const context = {
        URL, URLSearchParams, Date, Set,
        window: { BLOG_POSTS: posts, location: { protocol: 'https:', pathname, search } },
        document: {
            readyState: 'complete', body: { dataset: {} },
            getElementById: id => elements[id] || null,
        },
    };
    vm.runInNewContext(code, context);
    return elements;
}

const hostileMetadata = {
    slug: 'test', title: '<img src=x onerror=alert(1)>', source: 'A&B',
    excerpt: '"quoted" <script>alert(1)</script>', published: '<date>', readTime: "'time'",
    sourceUrl: 'javascript:alert(1)', content: '<p>Repository-authored article.</p>',
};
let result = render([hostileMetadata]);
assert.ok(result['blog-list'].innerHTML.includes('&lt;img'));
assert.ok(result['blog-list'].innerHTML.includes('A&amp;B'));
assert.ok(!result['blog-list'].innerHTML.includes('<img'));
assert.ok(!result['blog-list'].innerHTML.includes('href="javascript:'));
assert.equal(result['post-source-link'].attributes.href, '#');
assert.equal(result['post-title'].textContent, hostileMetadata.title);
assert.equal(result['post-content'].innerHTML, hostileMetadata.content);

for (const url of ['http://example.com', 'data:text/html,hello', '//example.com', 'https://user:secret@example.com', 'not a URL']) {
    result = render([{ ...hostileMetadata, sourceUrl: url }]);
    assert.equal(result['post-source-link'].attributes.href, '#');
}
result = render([{ ...hostileMetadata, sourceUrl: 'https://example.com/article?a=1&b=2' }], '/blogs/%E0%A4%A/');
assert.equal(result['post-source-link'].attributes.href, 'https://example.com/article?a=1&b=2');
assert.ok(result['blog-list'].innerHTML.includes('?a=1&amp;b=2'));

const data = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'blogs/blog-data.js'), 'utf8'), data);
assert.equal(data.window.BLOG_POSTS.length, 4);
for (const post of data.window.BLOG_POSTS) {
    result = render(data.window.BLOG_POSTS, `/blogs/${post.slug}/`);
    assert.equal(result['post-title'].textContent, post.title);
    assert.equal(result['post-content'].innerHTML, post.content);
    assert.equal(result['post-source-link'].attributes.href, new URL(post.sourceUrl).href);
}
result = render(data.window.BLOG_POSTS, '/blogs/', '?slug=<img%20src=x%20onerror=alert(1)>');
assert.ok(!result['post-content'].innerHTML.includes('onerror=alert(1)'));
console.log('PASS: blog metadata escaping, unsafe URL rejection, malformed routes, all four article routes, and query input.');
