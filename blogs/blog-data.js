(function() {
    'use strict';

    // Ordered latest first by publish date
    const BLOG_POSTS = [
        {
            slug: 'when-the-model-knows-the-codebase',
            title: 'When the Model Knows the Codebase',
            source: 'Personal Blog',
            published: 'April 4, 2026',
            readTime: '7 min read',
            sourceUrl: 'https://kishorepagidi.com/blogs/when-the-model-knows-the-codebase/',
            excerpt: 'AI coding agents are not just writing faster code. They are changing who owns what, and if you are a product manager who has not noticed yet, you are already behind.',
            content: `
                <p>I was watching an engineer use Cursor 3 last week. Not a demo. Real work on a real feature, late in the day, nothing staged about it.</p>

                <p>The new version has something called an Agents Window. Multiple AI agents working simultaneously across the codebase, opening files, tracing dependencies, making decisions, writing code in parallel. The engineer had three agents running. One was refactoring a component. One was writing tests for changes already made. One was reading documentation it had never seen before and turning it into working implementation.</p>

                <p>The engineer was not typing much. They were reading. Scrolling. Redirecting. Catching a wrong assumption here, confirming a right one there. Occasionally writing a short instruction and watching the agents pick it up and run.</p>

                <p>I sat there for a moment and thought: I have seen this exact posture before. Not from an engineer. From the best product manager I ever worked with. Not doing everything. Watching what is happening, catching problems before they compound, steering without controlling. The machine had learned the same lesson that took most of us years to figure out. Stay upstream. The implementation takes care of itself.</p>

                <h2>Where I actually felt this</h2>

                <p>I ship AI features for mechanical engineers. The user base runs in the millions. Engineers who design aircraft components, medical devices, industrial equipment, the physical things that have to work the first time.</p>

                <p>A few months ago I was watching recordings of engineers using a feature I had spent weeks specifying. The feature did exactly what the spec said. Technically correct, fully shipped, working as described. And the engineers hated it. Not in a loud way. In the quiet, resigned way that people hate things they have to use anyway. They were clicking around it, working past it, developing little workarounds in the first session.</p>

                <p>The spec had been precise about the mechanism. It had said almost nothing about when the mechanism should appear, or what the engineer was thinking when it did, or what they would do if it got it wrong. I had defined what the feature did. I had not defined what problem it solved or how an engineer's brain was already working at the moment it interrupted them.</p>

                <p>That is not a technical failure. It is a clarity failure. And I have been writing specs differently ever since.</p>

                <h2>What the old model allowed</h2>

                <p>Not long ago, the way a PM worked with engineering went something like this. You wrote a spec. You brought it to planning. Engineers estimated the work, negotiated scope, asked clarifying questions, made reasonable assumptions when things were fuzzy. The engineer was the translation layer, and a good engineer was a forgiving one. They filled your gaps with judgment. They sent a Slack message. They caught things before they became problems.</p>

                <p>That process was slow but it was self-correcting. Your vagueness got absorbed somewhere between the spec and the pull request.</p>

                <p>Now imagine the translation layer gets ten times faster and has no forgiveness built in. No Slack message. No reasonable assumption. Just instant output that reflects exactly the quality of your thinking, including the parts you were vague about. A coding agent takes what you give it and runs. If your requirements were fuzzy, you will know immediately, because the output will be wrong in ways that are obvious, and you will have to go back and be clearer.</p>

                <p>That is what it feels like to work with these tools today. Instant feedback on the quality of your thinking. Honest in a way that humans are usually too polite to be.</p>

                <h2>The three shifts, in plain language</h2>

                <p>The first is that vagueness now costs you immediately rather than slowly.</p>

                <p>I used to write acceptance criteria like this: <em>Users should be able to find and apply the right option without feeling confused.</em> Reasonable. Directional. An experienced engineer would ask follow-up questions. A coding agent will just build something that technically satisfies those words and misses the point completely.</p>

                <p>Now I write like this: <em>A first-time user with no prior training should select the correct option within 90 seconds. If they hover over an option for more than three seconds, show a tooltip with one example. There are no wrong choices, so never show a warning state.</em> The difference feels pedantic until you see what the agent produces from each version.</p>

                <p>The second shift is that "done" has to mean something different. There was a time when done meant engineering approved the pull request. That implied review, validation, quality gates. Now a model can pass its own review. The code is clean, the tests pass, the logic is coherent. And the feature can still be completely wrong, because correctness and usefulness are not the same thing and the model only knows how to check the first one.</p>

                <p>The third shift is where the leverage lives now. If implementation is no longer the constraint, the constraint has moved upstream. It lives in the quality of the problem definition, the sharpness of the hypothesis, the clarity of what success actually looks like. This was always true in theory. A coding agent just made it unavoidably true in practice.</p>

                <h2>What does not change, and why it matters more now</h2>

                <p>Here is what no model can do.</p>

                <p>It cannot decide what is worth building. It cannot sit with customers and sense the difference between what they say they want and what they are actually trying to accomplish. It cannot feel the weight of a strategic bet, or know when data is technically correct but emotionally misleading, or read the room when a stakeholder is nervous for reasons they have not said out loud yet.</p>

                <p>Those things require judgment about humans, not logic about systems. They require being in the world, not just in the codebase.</p>

                <p>The PMs who are hardest to replace have always been the ones whose value lived in those moments. The ones who could hear what was not being said. Who could feel when a product was off even when the metrics looked fine. Who earned trust with customers not by being right, but by being honest when they were wrong.</p>

                <p>That kind of value is not going anywhere. If anything, it becomes more visible, because everything around it is getting automated.</p>

                <h2>Where to invest your time</h2>

                <p>The skills that become less valuable are the ones that existed to manage a slow process. Status updates, sprint ceremonies, velocity tracking, point estimation. These were important because implementation was unpredictable and needed scaffolding. When implementation gets faster and more reliable, the scaffolding matters less.</p>

                <p>The skills that become more valuable are the ones that were always the core of the job but easy to deprioritize when you were busy managing process. Customer understanding so specific that you can write a brief an agent executes correctly the first time. Strategic clarity sharp enough to explain in a single paragraph what the next six months should accomplish and why. Taste, the ability to look at something and know whether it is right before a single user sees it.</p>

                <p>These are not soft skills. They are the hardest skills in the building.</p>

                <h2>One thing to try this week</h2>

                <p>If your team uses any AI coding tool, spend one hour watching an engineer use it on real work. Not a demo. Real work on a real feature.</p>

                <p>Watch where the agent gets it wrong. Watch what the engineer has to clarify. Notice what assumptions the model made when the instruction was not specific enough.</p>

                <p>That gap between the first output and the final accepted version is your design space. It is telling you exactly what a sharper brief would have prevented. Write down what you see. It will be the most honest product management feedback you get all month.</p>

                <p>There is a version of the AI and jobs conversation that generates a lot of attention right now. It is mostly about fear, and mostly unproductive, and mostly about the wrong question.</p>

                <p>The useful question is not whether the job survives. The useful question is what kind of PM survives it.</p>

                <p>The answer has not changed. It just has nowhere left to hide.</p>
            `
        },
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
                <figure>
                    <img src="https://blog-assets.solidworks.com/uploads/sites/2/2026/01/commandpredictorjan2226.png" alt="SOLIDWORKS Command Predictor suggestions" loading="lazy">
                    <figcaption>Command Predictor surfaces suggested next steps directly in the workflow.</figcaption>
                </figure>

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
                <figure>
                    <img src="https://blog-assets.solidworks.com/uploads/sites/2/2026/01/aurajan2226.png" alt="AURA virtual companion in SOLIDWORKS" loading="lazy">
                    <figcaption>AURA helps engineers retrieve contextual answers while staying inside their design flow.</figcaption>
                </figure>

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
                <figure>
                    <img src="https://datawrapper.dwcdn.net/qhaTK/plain-s.png?v=2" alt="Benchmark chart comparing Interaction Warping with baselines" loading="lazy">
                    <figcaption>Task success comparison from the original Medium article benchmark section.</figcaption>
                </figure>

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
                <figure>
                    <img src="https://blog-assets.solidworks.com/uploads/sites/2/2025/08/enableautogeneratedrawinggdblogaug2225.png" alt="Auto Generate Drawing option in SOLIDWORKS" loading="lazy">
                    <figcaption>Auto Generate Drawing starts with a full draft sheet and proposed annotations.</figcaption>
                </figure>

                <h2>What the Workflow Automates</h2>
                <ul>
                    <li>Automatic hole recognition with AI assistance.</li>
                    <li>View arrangement to reduce overlap with annotations.</li>
                    <li>Sheet format matching to relevant industry standards.</li>
                    <li>Initial sheet sizing and scaling for readability.</li>
                </ul>
                <figure>
                    <img src="https://blog-assets.solidworks.com/uploads/sites/2/2025/08/crosssectionviewsgdblogaug2225.png" alt="Generated section and detail views in SOLIDWORKS drawing" loading="lazy">
                    <figcaption>Generated views and dimensions can be refined without rebuilding from scratch.</figcaption>
                </figure>

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
            content: `
                <p>I was watching an engineer use Cursor 3 last week. Not a demo. Real work on a real feature, late in the day, nothing staged about it.</p>

                <p>The new version has something called an Agents Window. Multiple AI agents working simultaneously across the codebase, opening files, tracing dependencies, making decisions, writing code in parallel. The engineer had three agents running. One was refactoring a component. One was writing tests for changes already made. One was reading documentation it had never seen before and turning it into working implementation.</p>

                <p>The engineer was not typing much. They were reading. Scrolling. Redirecting. Catching a wrong assumption here, confirming a right one there. Occasionally writing a short instruction and watching the agents pick it up and run.</p>

                <p>I sat there for a moment and thought: I have seen this exact posture before. Not from an engineer. From the best product manager I ever worked with. Not doing everything. Watching what is happening, catching problems before they compound, steering without controlling. The machine had learned the same lesson that took most of us years to figure out. Stay upstream. The implementation takes care of itself.</p>

                <h2>Where I actually felt this</h2>

                <p>I ship AI features for mechanical engineers. The user base runs in the millions. Engineers who design aircraft components, medical devices, industrial equipment, the physical things that have to work the first time.</p>

                <p>A few months ago I was watching recordings of engineers using a feature I had spent weeks specifying. The feature did exactly what the spec said. Technically correct, fully shipped, working as described. And the engineers hated it. Not in a loud way. In the quiet, resigned way that people hate things they have to use anyway. They were clicking around it, working past it, developing little workarounds in the first session.</p>

                <p>The spec had been precise about the mechanism. It had said almost nothing about when the mechanism should appear, or what the engineer was thinking when it did, or what they would do if it got it wrong. I had defined what the feature did. I had not defined what problem it solved or how an engineer's brain was already working at the moment it interrupted them.</p>

                <p>That is not a technical failure. It is a clarity failure. And I have been writing specs differently ever since.</p>

                <h2>What the old model allowed</h2>

                <p>Not long ago, the way a PM worked with engineering went something like this. You wrote a spec. You brought it to planning. Engineers estimated the work, negotiated scope, asked clarifying questions, made reasonable assumptions when things were fuzzy. The engineer was the translation layer, and a good engineer was a forgiving one. They filled your gaps with judgment. They sent a Slack message. They caught things before they became problems.</p>

                <p>That process was slow but it was self-correcting. Your vagueness got absorbed somewhere between the spec and the pull request.</p>

                <p>Now imagine the translation layer gets ten times faster and has no forgiveness built in. No Slack message. No reasonable assumption. Just instant output that reflects exactly the quality of your thinking, including the parts you were vague about. A coding agent takes what you give it and runs. If your requirements were fuzzy, you will know immediately, because the output will be wrong in ways that are obvious, and you will have to go back and be clearer.</p>

                <p>That is what it feels like to work with these tools today. Instant feedback on the quality of your thinking. Honest in a way that humans are usually too polite to be.</p>

                <h2>The three shifts, in plain language</h2>

                <p>The first is that vagueness now costs you immediately rather than slowly.</p>

                <p>I used to write acceptance criteria like this: <em>Users should be able to find and apply the right option without feeling confused.</em> Reasonable. Directional. An experienced engineer would ask follow-up questions. A coding agent will just build something that technically satisfies those words and misses the point completely.</p>

                <p>Now I write like this: <em>A first-time user with no prior training should select the correct option within 90 seconds. If they hover over an option for more than three seconds, show a tooltip with one example. There are no wrong choices, so never show a warning state.</em> The difference feels pedantic until you see what the agent produces from each version.</p>

                <p>The second shift is that "done" has to mean something different. There was a time when done meant engineering approved the pull request. That implied review, validation, quality gates. Now a model can pass its own review. The code is clean, the tests pass, the logic is coherent. And the feature can still be completely wrong, because correctness and usefulness are not the same thing and the model only knows how to check the first one.</p>

                <p>The third shift is where the leverage lives now. If implementation is no longer the constraint, the constraint has moved upstream. It lives in the quality of the problem definition, the sharpness of the hypothesis, the clarity of what success actually looks like. This was always true in theory. A coding agent just made it unavoidably true in practice.</p>

                <h2>What does not change, and why it matters more now</h2>

                <p>Here is what no model can do.</p>

                <p>It cannot decide what is worth building. It cannot sit with customers and sense the difference between what they say they want and what they are actually trying to accomplish. It cannot feel the weight of a strategic bet, or know when data is technically correct but emotionally misleading, or read the room when a stakeholder is nervous for reasons they have not said out loud yet.</p>

                <p>Those things require judgment about humans, not logic about systems. They require being in the world, not just in the codebase.</p>

                <p>The PMs who are hardest to replace have always been the ones whose value lived in those moments. The ones who could hear what was not being said. Who could feel when a product was off even when the metrics looked fine. Who earned trust with customers not by being right, but by being honest when they were wrong.</p>

                <p>That kind of value is not going anywhere. If anything, it becomes more visible, because everything around it is getting automated.</p>

                <h2>Where to invest your time</h2>

                <p>The skills that become less valuable are the ones that existed to manage a slow process. Status updates, sprint ceremonies, velocity tracking, point estimation. These were important because implementation was unpredictable and needed scaffolding. When implementation gets faster and more reliable, the scaffolding matters less.</p>

                <p>The skills that become more valuable are the ones that were always the core of the job but easy to deprioritize when you were busy managing process. Customer understanding so specific that you can write a brief an agent executes correctly the first time. Strategic clarity sharp enough to explain in a single paragraph what the next six months should accomplish and why. Taste, the ability to look at something and know whether it is right before a single user sees it.</p>

                <p>These are not soft skills. They are the hardest skills in the building.</p>

                <h2>One thing to try this week</h2>

                <p>If your team uses any AI coding tool, spend one hour watching an engineer use it on real work. Not a demo. Real work on a real feature.</p>

                <p>Watch where the agent gets it wrong. Watch what the engineer has to clarify. Notice what assumptions the model made when the instruction was not specific enough.</p>

                <p>That gap between the first output and the final accepted version is your design space. It is telling you exactly what a sharper brief would have prevented. Write down what you see. It will be the most honest product management feedback you get all month.</p>

                <p>There is a version of the AI and jobs conversation that generates a lot of attention right now. It is mostly about fear, and mostly unproductive, and mostly about the wrong question.</p>

                <p>The useful question is not whether the job survives. The useful question is what kind of PM survives it.</p>

                <p>The answer has not changed. It just has nowhere left to hide.</p>
            `
        }
    ];

    window.BLOG_POSTS = BLOG_POSTS;
})();
