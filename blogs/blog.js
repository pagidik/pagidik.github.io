(function() {
    'use strict';

    const STORAGE_KEY = 'kp-blog-theme';
    const VALID_THEMES = new Set(['dark', 'light']);
    const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS : [];

    function byId(id) {
        return document.getElementById(id);
    }

    function withFallback(text, fallback) {
        return text ? text : fallback;
    }

    function applyTheme(theme, persist = true) {
        const resolvedTheme = VALID_THEMES.has(theme) ? theme : 'dark';
        document.body.dataset.theme = resolvedTheme;

        const icon = byId('theme-icon');
        const toggle = byId('theme-toggle');

        if (icon) {
            icon.textContent = resolvedTheme === 'light' ? 'Light' : 'Dark';
        }

        if (toggle) {
            toggle.setAttribute(
                'aria-label',
                resolvedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            );
        }

        if (persist) {
            try {
                localStorage.setItem(STORAGE_KEY, resolvedTheme);
            } catch (error) {
                // Ignore storage errors and continue with in-memory theme state.
            }
        }
    }

    function getInitialTheme() {
        try {
            const storedTheme = localStorage.getItem(STORAGE_KEY);
            if (VALID_THEMES.has(storedTheme)) {
                return storedTheme;
            }
        } catch (error) {
            // Ignore and use default.
        }

        return 'light';
    }

    function initThemeToggle() {
        const toggle = byId('theme-toggle');
        if (!toggle) {
            return;
        }

        applyTheme(getInitialTheme(), false);

        toggle.addEventListener('click', () => {
            const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    function getBlogPathPrefix() {
        const path = window.location.pathname || '';
        const match = path.match(/\/blogs\/?(.*)$/i);

        if (!match) {
            return 'blogs/';
        }

        const afterBlogs = match[1].replace(/index\.html$/i, '');
        const segments = afterBlogs.split('/').filter(Boolean);

        if (segments.length === 0) {
            return './';
        }

        return '../';
    }

    function getPostHref(post) {
        const basePath = `${getBlogPathPrefix()}${encodeURIComponent(post.slug)}/`;

        if (window.location.protocol === 'file:') {
            return `${basePath}index.html`;
        }

        return basePath;
    }

    function renderListRow(post, index, withOriginalLink = true) {
        const readingHref = getPostHref(post);

        return `
            <li>
                <a href="${readingHref}">
                    <span class="toc-chapter-num">Article ${String(index + 1).padStart(2, '0')} - ${post.source}</span>
                    <span class="toc-chapter-title">${post.title}</span>
                    <span class="toc-chapter-desc">${post.excerpt}</span>
                    <span class="toc-row-meta">
                        <span>${post.published}</span>
                        <span>${post.readTime}</span>
                    </span>
                </a>
                ${withOriginalLink ? `
                    <div class="toc-action-row">
                        <a href="${post.sourceUrl}" target="_blank" rel="noopener noreferrer">Open original source</a>
                    </div>
                ` : ''}
            </li>
        `;
    }

    function renderBlogList() {
        const container = byId('blog-list');
        if (!container || posts.length === 0) {
            return;
        }

        container.innerHTML = posts.map((post, index) => renderListRow(post, index)).join('');
    }

    function getSlugFromPath() {
        const path = window.location.pathname || '';
        const match = path.match(/\/blogs\/?(.*)$/i);

        if (!match) {
            return null;
        }

        const afterBlogs = match[1].replace(/index\.html$/i, '');
        const segments = afterBlogs.split('/').filter(Boolean);

        if (segments.length === 1) {
            return decodeURIComponent(segments[0]);
        }

        return null;
    }

    function getRequestedSlug() {
        const bodySlug = document.body ? document.body.dataset.postSlug : null;
        if (bodySlug) {
            return bodySlug;
        }

        const params = new URLSearchParams(window.location.search);
        const querySlug = params.get('slug');
        if (querySlug) {
            return querySlug;
        }

        return getSlugFromPath();
    }

    function getCurrentPost() {
        const slug = getRequestedSlug();
        if (!slug) {
            return posts[0] || null;
        }

        const exactMatch = posts.find((post) => post.slug === slug);
        return exactMatch || posts[0] || null;
    }

    function renderOtherPosts(currentSlug) {
        const container = byId('other-posts');
        if (!container) {
            return;
        }

        const otherPosts = posts.filter((post) => post.slug !== currentSlug);
        if (otherPosts.length === 0) {
            container.innerHTML = '<li><p class="empty-state">No other posts yet.</p></li>';
            return;
        }

        container.innerHTML = otherPosts
            .map((post, index) => renderListRow(post, index, false))
            .join('');
    }

    function renderPostPage() {
        const postIndex = byId('post-index');
        const postTitle = byId('post-title');
        const postSource = byId('post-source');
        const postDate = byId('post-date');
        const postReadTime = byId('post-read-time');
        const postExcerpt = byId('post-excerpt');
        const postContent = byId('post-content');
        const sourceLink = byId('post-source-link');

        if (!postTitle || !postContent) {
            return;
        }

        const post = getCurrentPost();
        if (!post) {
            postTitle.textContent = 'Post not found';
            postContent.innerHTML = '<p class="empty-state">No blog posts are available yet.</p>';
            return;
        }

        const activeIndex = Math.max(
            0,
            posts.findIndex((entry) => entry.slug === post.slug)
        );

        document.title = `${post.title} | Blog`;
        postTitle.textContent = post.title;

        if (postIndex) {
            postIndex.textContent = String(activeIndex + 1).padStart(2, '0');
        }

        if (postSource) {
            postSource.textContent = post.source;
        }

        if (postDate) {
            postDate.textContent = post.published;
        }

        if (postReadTime) {
            postReadTime.textContent = post.readTime;
        }

        if (postExcerpt) {
            postExcerpt.textContent = withFallback(post.excerpt, '');
        }

        if (sourceLink) {
            sourceLink.setAttribute('href', post.sourceUrl);
        }

        postContent.innerHTML = post.content;
        renderOtherPosts(post.slug);
    }

    function setProgressBar() {
        const bar = byId('progress-bar');
        if (!bar) {
            return;
        }

        const scrollTop = window.scrollY || window.pageYOffset;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    function initProgressBar() {
        if (!byId('progress-bar')) {
            return;
        }

        setProgressBar();
        window.addEventListener('scroll', setProgressBar, { passive: true });
        window.addEventListener('resize', setProgressBar);
    }

    function initMobileDrawer() {
        const menuToggle = byId('menu-toggle');
        const drawer = byId('mobile-drawer');
        const drawerOverlay = byId('drawer-overlay');
        const drawerClose = byId('drawer-close');

        if (!menuToggle || !drawer || !drawerOverlay || !drawerClose) {
            return;
        }

        const closeDrawer = () => {
            drawer.classList.remove('open');
            drawerOverlay.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
        };

        const openDrawer = () => {
            drawer.classList.add('open');
            drawerOverlay.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
        };

        menuToggle.addEventListener('click', openDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);
        drawerClose.addEventListener('click', closeDrawer);

        drawer.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeDrawer);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeDrawer();
            }
        });
    }

    function setFooterYear() {
        const yearElement = byId('blog-year');
        if (!yearElement) {
            return;
        }

        yearElement.textContent = String(new Date().getFullYear());
    }

    function init() {
        initThemeToggle();
        initProgressBar();
        initMobileDrawer();
        renderBlogList();
        renderPostPage();
        setFooterYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

