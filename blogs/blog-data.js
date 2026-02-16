(function() {
    'use strict';

    const BLOG_POSTS = [
        {
            slug: 'augmented-design-ai-mechanical-engineers',
            title: 'Augmented Design: How AI is Quietly Changing Daily Life for Mechanical Engineers',
            source: 'SOLIDWORKS Blog',
            published: 'January 28, 2026',
            readTime: '8 min read',
            sourceUrl: 'https://blogs.solidworks.com/solidworksblog/2026/01/augmented-design-how-ai-is-quietly-changing-daily-life-for-mechanical-engineers.html',
            excerpt: 'AI in mechanical engineering is shifting from flashy demos to practical workflow support: less setup work, less searching, and more time to think and decide.',
            content: `
                <p>Mechanical engineers do not wake up thinking about artificial intelligence. They wake up thinking about deadlines, drawings, tolerances, and shipping real work. That is why the most meaningful AI changes are not theatrical. They are practical.</p>
                <p>The strongest shift is from decisive AI to assistive AI. Instead of trying to replace engineering judgment, AI now removes repetitive setup, cleanup, and lookup steps that interrupt momentum in day-to-day CAD workflows.</p>

                <h2>The Real Evolution: Assistive AI</h2>
                <p>Early AI waves pushed fully generated answers. In mechanical engineering, that approach often failed because design intent is contextual: constraints move, tradeoffs evolve, and manufacturing realities can change everything.</p>
                <p>The newer pattern asks a better question: what can be removed so the engineer can think clearly? This is where AI becomes useful without taking ownership away from the designer.</p>

                <h2>Staying in Motion Instead of Searching</h2>
                <p>A surprising amount of engineering time disappears into searching for the right command, setting, or documentation. Features like command prediction reduce that friction by surfacing likely next steps while you work.</p>
                <p>That support protects flow state. Once momentum breaks, mistakes increase and confidence drops. Assistive intelligence helps prevent those breaks before they compound.</p>

                <h2>Reducing Rework That Steals Time</h2>
                <p>Many lost hours come from repair work after small changes: broken sketch relations, missing mates, and repetitive selection tasks. AI-assisted utilities are most valuable when they quietly shrink this non-creative overhead.</p>
                <ul>
                    <li>Repair broken sketch constraints while preserving design intent.</li>
                    <li>Recover missing mate references instead of rebuilding from scratch.</li>
                    <li>Accelerate repeated face and edge selection work.</li>
                    <li>Create simplified representations while keeping parametric links intact.</li>
                </ul>
                <p>These tools are not flashy, but they return time directly to engineering decisions.</p>

                <h2>From Commands to Skills</h2>
                <p>The next phase is moving from single commands to higher-level capabilities. Instead of manually sequencing every step, engineers define the outcome, and the system handles setup and first-pass execution.</p>
                <p>Virtual companions like AURA reflect this trend: grounded, contextual help that appears inside existing workflows. The goal is not novelty. The goal is fewer interruptions and fewer context switches.</p>

                <h2>Why This Matters</h2>
                <p>AI in CAD is no longer a future promise. It is a workflow shift already underway. It starts with tiny assistants that remove friction and grows into intent-driven support that shortens the distance between idea and workable geometry.</p>
                <p>The practical payoff is straightforward: more time to think, decide, and engineer.</p>
            `
        },
        {
            slug: 'from-segments-to-skills',
            title: 'From Segments to Skills: Teaching Robots to Manipulate Objects They\'ve Never Seen',
            source: 'Medium',
            published: 'April 11, 2025',
            readTime: '9 min read',
            sourceUrl: 'https://medium.com/@kishorereddy097/from-segments-to-skills-teaching-robots-to-manipulate-objects-theyve-never-seen-6cac05ba5d59',
            excerpt: 'Interaction Warping shows how robots can learn object manipulation from one demonstration by combining segmentation, 3D perception, and shape warping.',
            content: `
                <blockquote>
                    <p>What if a robot could watch one demonstration, then repeat the task with different objects, new poses, and cluttered scenes without retraining?</p>
                </blockquote>

                <p>This article presents Interaction Warping, a one-shot imitation learning method for robotic manipulation. The objective is to transfer behavior such as grasping and placement from a single demonstration to novel objects.</p>

                <h2>The Real-World Problem</h2>
                <p>Manipulation generalization is difficult because objects vary in shape, orientation, and visibility. In real environments, clean CAD models are often unavailable, and collecting large object-specific datasets is expensive.</p>
                <p>To succeed, a robot needs to reason in full 3D space and infer usable structure from imperfect sensory input.</p>

                <h2>Interaction Warping Pipeline</h2>
                <ol>
                    <li>Train a compact generative model over object point clouds.</li>
                    <li>Segment a novel object from RGB-D input at test time.</li>
                    <li>Warp the object into a canonical shape representation.</li>
                    <li>Transfer interaction points from the demonstration to the new object.</li>
                </ol>
                <p>This enables transfer of skills like hanging a mug, placing a bowl, or positioning a bottle even when the exact object has never been seen before.</p>

                <h2>Segmentation and 3D Perception Contribution</h2>
                <p>A major part of this work was integrating open-vocabulary segmentation and detection models to create per-object point clouds directly from RGB-D images.</p>
                <ul>
                    <li>Detect target objects in cluttered scenes.</li>
                    <li>Convert masks plus depth into usable point clouds.</li>
                    <li>Feed those clouds into shape warping without manual labels or CAD assets.</li>
                </ul>
                <p>The result was a pipeline that moves closer to real-world robot perception instead of relying on tightly controlled lab assumptions.</p>

                <h2>Experimental Results</h2>
                <p>Across multiple physical tasks, Interaction Warping outperformed strong baselines while using only one demonstration per task. This confirms that structure-aware transfer can work beyond toy settings.</p>

                <h2>Known Constraints</h2>
                <ul>
                    <li>Segmentation errors can still degrade manipulation reliability.</li>
                    <li>2D-to-3D mapping is sensitive to occlusion and depth noise.</li>
                    <li>Optimization-heavy inference remains slower than production targets.</li>
                </ul>

                <h2>Where This Goes Next</h2>
                <p>Future improvements include learned encoders for faster inference, active vision for better perception under occlusion, and multi-object reasoning for richer planning.</p>
                <p>The broader direction is clear: combining strong visual foundation models with geometry-aware learning can make robot skills more adaptable with less data and less manual setup.</p>
            `
        },
        {
            slug: 'skip-the-blank-sheet',
            title: 'Skip the Blank Sheet: Generative Drawing in SOLIDWORKS',
            source: 'SOLIDWORKS Blog',
            published: 'August 27, 2025',
            readTime: '6 min read',
            sourceUrl: 'https://blogs.solidworks.com/solidworksblog/2025/08/skip-the-blank-sheet-discover-the-generative-drawing-experience-in-solidworks.html',
            excerpt: 'Auto Generate Drawing in SOLIDWORKS jump-starts draft creation with smart view placement, early dimensions, and cleaner first-pass documentation.',
            content: `
                <p>Most engineering drawings start with repetitive setup: create the sheet, place base views, add sections, and begin dimensions. The generative drawing workflow in SOLIDWORKS is designed to skip much of this startup overhead.</p>
                <p>With Auto Generate Drawing (Beta), a model can open directly into a ready-to-edit drawing layout that includes arranged views and starter dimensions.</p>

                <h2>What the Workflow Automates</h2>
                <ul>
                    <li>Automatic hole recognition with AI assistance.</li>
                    <li>View arrangement to reduce overlap with annotations.</li>
                    <li>Sheet format matching to relevant industry standards.</li>
                    <li>Initial sheet sizing and scaling for readability.</li>
                </ul>

                <h2>Why It Helps</h2>
                <p>The automation does not replace engineering decisions. It creates a sensible first draft so engineers can focus on design intent, tolerancing strategy, and manufacturability rather than repetitive setup.</p>
                <p>Section views can still be adjusted, dimensions can be curated, and review flows remain unchanged with existing PDM and approval processes.</p>

                <h2>Best-Fit Use Cases</h2>
                <p>The experience is especially useful for common prismatic components and routine assemblies where layout and baseline annotation work tend to be predictable but time-consuming.</p>
                <p>For these cases, generative drawing acts like a fast scaffold: engineers refine, validate, and finalize instead of starting from an empty sheet every time.</p>

                <h2>How to Access It</h2>
                <ol>
                    <li>File menu: Auto-Generate Drawing (Beta).</li>
                    <li>Right-click in FeatureManager or graphics area: Auto-Generate Drawing (Beta).</li>
                    <li>New menu shortcut: Auto-Generate Drawing (Beta).</li>
                </ol>

                <h2>Takeaway</h2>
                <p>This workflow does not ask teams to change how they design. It removes early drafting friction so they can get to high-value judgment sooner. The result is clearer first drafts, faster reviews, and more time spent on engineering decisions that matter.</p>
            `
        }
    ];

    window.BLOG_POSTS = BLOG_POSTS;
})();
