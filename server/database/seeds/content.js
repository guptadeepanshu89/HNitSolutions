function serviceContent({ overview, problems, approach, features, tools, process, benefits, faq }) {
  return { overview, problems, approach, features, tools, process, benefits, faq };
}

const services = [
  {
    title: "Software Development",
    slug: "software-development",
    icon: "code-2",
    category: "Engineering",
    description: "Custom software, CRM, ERP and API platforms engineered for scale, security and long-term growth.",
    content: serviceContent({
      overview:
        "We design and build custom software for ambitious teams — from internal operating systems to customer-facing platforms. Every product is architected for reliability, maintainability and measurable business outcomes.",
      problems: [
        { title: "Fragmented operations", text: "Spreadsheets and disconnected tools slow teams and hide the real picture." },
        { title: "Legacy systems", text: "Ageing software is expensive to maintain and risky to extend." },
        { title: "Integration gaps", text: "Critical data lives in silos, making automation and reporting painful." },
      ],
      approach: [
        { title: "Discovery first", text: "We map workflows, constraints and success metrics before writing a line of code." },
        { title: "Modular architecture", text: "Services, APIs and data models are designed so the product can grow without a rewrite." },
        { title: "Ship in increments", text: "Working software is released in phases so stakeholders can validate early." },
      ],
      features: [
        "Custom software",
        "CRM platforms",
        "ERP modules",
        "Business applications",
        "API development",
        "Backend systems",
        "Database systems",
        "Enterprise applications",
        "Cloud applications",
        "Third-party integrations",
      ],
      tools: ["Node.js", "React", "PostgreSQL", "REST APIs"],
      process: [
        { title: "Scope", text: "Define users, workflows and the first valuable release." },
        { title: "Architecture", text: "Choose the data model, APIs and infrastructure shape." },
        { title: "Build", text: "Develop, review and test in short cycles." },
        { title: "Launch", text: "Deploy, monitor and iterate after go-live." },
      ],
      benefits: [
        "Software that matches how your business actually works",
        "Cleaner operations and fewer manual handoffs",
        "A foundation that can add modules without starting over",
      ],
      faq: [
        { q: "Do you rebuild existing systems?", a: "Yes. We can modernise, replace or integrate with what you already use." },
        { q: "Can you work with our internal team?", a: "We regularly embed with in-house engineers and product owners." },
      ],
    }),
  },
  {
    title: "Website Development",
    slug: "website-development",
    icon: "globe",
    category: "Engineering",
    description: "High-performance business, corporate and e-commerce websites built for conversion and search.",
    content: serviceContent({
      overview:
        "We create websites that feel as refined as the companies they represent — fast, accessible, SEO-friendly and easy to evolve.",
      problems: [
        { title: "Slow, dated sites", text: "Outdated templates hurt trust and conversion." },
        { title: "Hard to update", text: "Marketing teams wait on developers for every copy change." },
        { title: "Invisible in search", text: "Poor structure and performance hide the site from the people who need it." },
      ],
      approach: [
        { title: "Content-led structure", text: "Information architecture is designed around how visitors actually decide." },
        { title: "Performance budget", text: "We treat speed as a product requirement, not an afterthought." },
        { title: "Design systems", text: "Reusable components keep the site consistent as it grows." },
      ],
      features: [
        "Business websites",
        "Corporate websites",
        "Landing pages",
        "E-commerce websites",
        "React websites",
        "Responsive websites",
        "Performance optimization",
        "SEO-friendly development",
      ],
      tools: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma"],
      process: [
        { title: "Sitemap", text: "Clarify pages, journeys and conversion points." },
        { title: "Design", text: "Translate brand into a distinctive interface." },
        { title: "Build", text: "Implement responsive, accessible frontends." },
        { title: "Launch", text: "Ship, measure and refine." },
      ],
      benefits: [
        "A site that looks premium on every device",
        "Faster load times and stronger search foundations",
        "A codebase that marketing and engineering can both live with",
      ],
      faq: [
        { q: "Do you migrate existing websites?", a: "Yes. We can rebuild, restyle or incrementally modernise your current site." },
        { q: "Will the site be mobile-first?", a: "Every website we ship is designed and tested from 320px upward." },
      ],
    }),
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "smartphone",
    category: "Engineering",
    description: "Native-quality Android, iOS and React Native apps with real-time features and robust APIs.",
    content: serviceContent({
      overview:
        "We build mobile products that feel fast, familiar and reliable — from customer apps to internal field tools.",
      problems: [
        { title: "Idea without a product path", text: "Teams know the outcome they want but not how to ship an app safely." },
        { title: "Fragile integrations", text: "Apps break when backends, auth or notifications are treated as afterthoughts." },
        { title: "One-platform thinking", text: "Building twice for iOS and Android burns time and budget." },
      ],
      approach: [
        { title: "Product definition", text: "We isolate the first version that users will actually adopt." },
        { title: "Shared core", text: "React Native and a well-designed API keep iOS and Android aligned." },
        { title: "Release discipline", text: "Push, crash reporting and store readiness are planned from day one." },
      ],
      features: [
        "Android apps",
        "iOS apps",
        "React Native",
        "Cross-platform apps",
        "API integration",
        "Push notifications",
        "Real-time applications",
      ],
      tools: ["React Native", "Node.js", "PostgreSQL", "REST APIs", "AWS", "Figma"],
      process: [
        { title: "Flows", text: "Map screens, states and edge cases." },
        { title: "Prototype", text: "Validate the experience before full build." },
        { title: "Develop", text: "Implement UI, APIs and device features." },
        { title: "Store launch", text: "Prepare listings, builds and monitoring." },
      ],
      benefits: [
        "One product that feels native on both platforms",
        "Reliable notifications and real-time updates",
        "A backend the app can grow with",
      ],
      faq: [
        { q: "Do you publish to the App Store and Play Store?", a: "Yes. We support listing, builds, review and release." },
        { q: "Can you add an app onto our existing API?", a: "We regularly integrate with existing backends or design a new one." },
      ],
    }),
  },
  {
    title: "Digital Presence",
    slug: "digital-presence",
    icon: "radar",
    category: "Growth",
    description: "A coherent website, search, social and brand presence that makes your company easy to find and trust.",
    content: serviceContent({
      overview:
        "Digital presence is the system around your brand online — website, profiles, search, content and reputation — working as one.",
      problems: [
        { title: "Inconsistent brand", text: "The website, Google profile and social channels tell different stories." },
        { title: "Low discoverability", text: "Customers cannot find accurate information when they search." },
        { title: "No ownership", text: "Nobody is accountable for how the company looks online." },
      ],
      approach: [
        { title: "Audit", text: "We map every public surface and the gaps between them." },
        { title: "Unify", text: "Messaging, visuals and listings are aligned to one brand system." },
        { title: "Operate", text: "We leave you with a cadence for content, reviews and measurement." },
      ],
      features: [
        "Website",
        "Google Business Profile",
        "Social media",
        "SEO foundations",
        "Content",
        "Online branding",
        "Analytics",
        "Online reputation",
      ],
      tools: ["Google Business Profile", "Google Analytics", "Search Console", "Figma", "Meta Business Suite"],
      process: [
        { title: "Audit", text: "Review listings, site, social and reviews." },
        { title: "System", text: "Define brand voice, visuals and channel roles." },
        { title: "Launch", text: "Update the surfaces that matter first." },
        { title: "Maintain", text: "Keep presence accurate and active." },
      ],
      benefits: [
        "A consistent first impression across the web",
        "Customers find the right information faster",
        "A practical operating rhythm, not a one-off makeover",
      ],
      faq: [
        { q: "Is this only for local businesses?", a: "No. We work with both local and multi-market brands." },
        { q: "Do you manage this ongoing?", a: "We can set it up or stay on as an operating partner." },
      ],
    }),
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: "share-2",
    category: "Growth",
    description: "Content strategy, social management and paid campaigns that grow audiences with measurable intent.",
    content: serviceContent({
      overview:
        "We treat social as a growth channel, not a content treadmill — with a strategy, a calendar and reporting that leadership can understand.",
      problems: [
        { title: "Posting without a plan", text: "Channels stay active but do not move pipeline or brand." },
        { title: "Inconsistent quality", text: "Creatives, captions and cadence vary week to week." },
        { title: "Unclear ROI", text: "Spend and effort are hard to connect to outcomes." },
      ],
      approach: [
        { title: "Audience first", text: "We define who we are speaking to and what they should do next." },
        { title: "Systemised content", text: "Formats, pillars and production rhythms keep quality high." },
        { title: "Paid plus organic", text: "Organic builds trust; paid extends the work that already performs." },
      ],
      features: [
        "Instagram",
        "Facebook",
        "LinkedIn",
        "Content strategy",
        "Social media management",
        "Paid campaigns",
        "Reels",
        "Audience growth",
        "Social media analytics",
      ],
      tools: ["Meta Ads", "LinkedIn Campaign Manager", "Figma", "Google Analytics"],
      process: [
        { title: "Position", text: "Clarify brand voice and channel roles." },
        { title: "Plan", text: "Build pillars, calendar and creative system." },
        { title: "Publish", text: "Produce, schedule and engage." },
        { title: "Optimise", text: "Double down on formats that perform." },
      ],
      benefits: [
        "A recognisable brand presence",
        "Content that can be produced consistently",
        "Clearer reporting on growth and engagement",
      ],
      faq: [
        { q: "Do you create the creatives?", a: "Yes. Strategy, copy, design and publishing can sit in one team." },
        { q: "Can you run paid social only?", a: "Yes. Organic, paid or both — depending on the brief." },
      ],
    }),
  },
  {
    title: "SEO",
    slug: "seo",
    icon: "search",
    category: "Growth",
    description: "Technical, on-page and content SEO that strengthens visibility without promising guaranteed rankings.",
    content: serviceContent({
      overview:
        "We improve how search engines understand and trust your site — through technical health, content quality and measured iteration. We do not promise guaranteed rankings.",
      problems: [
        { title: "Technical blockers", text: "Crawl issues, weak internals and poor Core Web Vitals hide good pages." },
        { title: "Thin content", text: "Pages exist but do not answer the questions buyers actually ask." },
        { title: "No measurement", text: "Teams cannot tell which work moved visibility." },
      ],
      approach: [
        { title: "Foundations", text: "Fix crawl, indexation, structure and speed first." },
        { title: "Intent mapping", text: "Align pages to real search jobs, not vanity keywords." },
        { title: "Compounding content", text: "Build pages and internal links that get stronger over time." },
      ],
      features: [
        "Technical SEO",
        "On-page SEO",
        "Off-page SEO",
        "Keyword research",
        "Local SEO",
        "Content SEO",
        "Core Web Vitals",
        "SEO analytics",
        "Competitor analysis",
      ],
      tools: ["Google Search Console", "Google Analytics", "Screaming Frog-style audits", "PostgreSQL reporting"],
      process: [
        { title: "Audit", text: "Technical, content and competitive baseline." },
        { title: "Prioritise", text: "Sequence the work with the highest compounding value." },
        { title: "Implement", text: "Ship technical and content changes with engineering." },
        { title: "Report", text: "Track visibility, traffic quality and conversions." },
      ],
      benefits: [
        "A healthier, more crawlable website",
        "Content aligned to real demand",
        "Reporting that focuses on progress, not vanity",
      ],
      faq: [
        { q: "Do you guarantee first-page rankings?", a: "No. Search results are controlled by search engines. We focus on durable, ethical improvements." },
        { q: "How long before we see movement?", a: "Technical wins can appear faster; content and authority typically compound over months." },
      ],
    }),
  },
  {
    title: "Google Ads / PPC",
    slug: "google-ads",
    icon: "megaphone",
    category: "Growth",
    description: "Search, display, shopping and remarketing campaigns built for efficient, measurable demand — not guaranteed results.",
    content: serviceContent({
      overview:
        "We plan and operate Google Ads programmes with a clear offer, clean tracking and disciplined optimisation. We do not claim guaranteed results.",
      problems: [
        { title: "Spend without structure", text: "Campaigns are broad, overlapping and hard to diagnose." },
        { title: "Broken measurement", text: "Conversions are missing, duplicated or not connected to value." },
        { title: "Creative fatigue", text: "Ads and landing pages are not tested as a system." },
      ],
      approach: [
        { title: "Offer and intent", text: "We start from the commercial offer and the queries that signal demand." },
        { title: "Account architecture", text: "Campaigns, audiences and landing pages are structured for learning." },
        { title: "Iterate weekly", text: "Budget, queries, creatives and pages are refined from evidence." },
      ],
      features: [
        "Search ads",
        "Display ads",
        "Shopping ads",
        "Remarketing",
        "Conversion tracking",
        "Campaign optimization",
        "PPC strategy",
        "Analytics",
      ],
      tools: ["Google Ads", "Google Analytics", "Google Tag Manager", "Search Console"],
      process: [
        { title: "Diagnose", text: "Review account, tracking and economics." },
        { title: "Rebuild", text: "Structure campaigns around intent and offers." },
        { title: "Launch", text: "Ship tracking, ads and landing pages together." },
        { title: "Optimise", text: "Improve efficiency with a weekly operating cadence." },
      ],
      benefits: [
        "Clearer campaign structure",
        "More trustworthy conversion data",
        "A testing system instead of set-and-forget ads",
      ],
      faq: [
        { q: "Can you guarantee leads or ROAS?", a: "No. Markets, competition and creative all move. We manage toward efficiency, not guarantees." },
        { q: "Do you also build landing pages?", a: "Yes. Ads perform better when the page is designed for the same intent." },
      ],
    }),
  },
  {
    title: "Graphic Design",
    slug: "graphic-design",
    icon: "palette",
    category: "Design",
    description: "Campaign creatives, presentations and marketing materials with a consistent, premium visual language.",
    content: serviceContent({
      overview:
        "We design the everyday assets brands need to look considered — social, ads, packaging-adjacent graphics, decks and web visuals.",
      problems: [
        { title: "Inconsistent assets", text: "Every designer or freelancer leaves a slightly different brand behind." },
        { title: "Last-minute production", text: "Campaigns stall because creatives are not ready." },
        { title: "Template look", text: "Generic layouts make a serious company look interchangeable." },
      ],
      approach: [
        { title: "System over one-offs", text: "We build reusable layouts so the brand stays coherent." },
        { title: "Channel craft", text: "Each format is designed for how it will actually be seen." },
        { title: "Fast iteration", text: "Feedback loops are tight so campaigns can move." },
      ],
      features: [
        "Social media creatives",
        "Marketing banners",
        "Website graphics",
        "Brochures",
        "Presentations",
        "Advertisement creatives",
        "Marketing materials",
      ],
      tools: ["Figma", "Adobe Creative Cloud", "Brand guidelines"],
      process: [
        { title: "Brief", text: "Collect goals, audience and mandatory assets." },
        { title: "Direction", text: "Explore a distinctive visual route." },
        { title: "Produce", text: "Deliver the full set of sizes and formats." },
        { title: "Handoff", text: "Package files and usage notes." },
      ],
      benefits: [
        "A more distinctive visual presence",
        "Faster campaign production",
        "Assets that feel like one brand",
      ],
      faq: [
        { q: "Can you work from our existing brand?", a: "Yes. We extend current guidelines or tighten them if they are incomplete." },
        { q: "Do you deliver source files?", a: "Yes. We hand over editable sources and export-ready assets." },
      ],
    }),
  },
  {
    title: "Branding",
    slug: "branding",
    icon: "hexagon",
    category: "Design",
    description: "Logo, identity systems and brand guidelines that give a company a distinctive, usable visual language.",
    content: serviceContent({
      overview:
        "We build brand systems that are distinctive enough to remember and practical enough to use — from first mark to everyday templates.",
      problems: [
        { title: "Generic identity", text: "The brand could belong to any competitor in the category." },
        { title: "Unusable guidelines", text: "The logo exists but nobody knows how to apply it." },
        { title: "Fragmented rollout", text: "Website, decks and social all feel like different companies." },
      ],
      approach: [
        { title: "Position first", text: "We define the idea the brand should own before drawing anything." },
        { title: "System thinking", text: "Colour, type, grid and motion are designed as one language." },
        { title: "Practical rollout", text: "Guidelines include real templates, not just posters of the logo." },
      ],
      features: [
        "Logo design",
        "Brand identity",
        "Color palette",
        "Typography",
        "Brand guidelines",
        "Marketing materials",
        "Visual identity",
      ],
      tools: ["Figma", "Adobe Illustrator", "Brand workshops"],
      process: [
        { title: "Discover", text: "Workshops on audience, category and ambition." },
        { title: "Define", text: "Positioning, personality and verbal cues." },
        { title: "Design", text: "Mark, colour, type and applications." },
        { title: "Document", text: "Guidelines and starter templates." },
      ],
      benefits: [
        "A brand that is easier to recognise",
        "Clearer rules for anyone producing assets",
        "A stronger foundation for website and campaigns",
      ],
      faq: [
        { q: "Do you only design logos?", a: "We can, but the strongest work includes the full identity system." },
        { q: "Can you refresh an existing brand?", a: "Yes. Evolution is often more valuable than a full restart." },
      ],
    }),
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "pen-tool",
    category: "Design",
    description: "Product interfaces and design systems that make complex software feel simple, premium and usable.",
    content: serviceContent({
      overview:
        "We design digital products people can actually use — from research and flows to high-fidelity interfaces and design systems.",
      problems: [
        { title: "Pretty but confusing", text: "Visual polish hides broken journeys and unclear hierarchy." },
        { title: "No system", text: "Every screen is designed from scratch, so quality drifts." },
        { title: "Handoff friction", text: "Engineering receives pictures, not a product language." },
      ],
      approach: [
        { title: "Understand the job", text: "We design around user goals, not just screens." },
        { title: "Prototype early", text: "Flows are tested before they become expensive to change." },
        { title: "Systematise", text: "Components and tokens keep the product coherent as it scales." },
      ],
      features: [
        "User research",
        "Information architecture",
        "Wireframes",
        "Interactive prototypes",
        "Visual UI design",
        "Design systems",
        "Usability reviews",
      ],
      tools: ["Figma", "FigJam", "User interviews", "Analytics"],
      process: [
        { title: "Research", text: "Understand users, constraints and current friction." },
        { title: "Structure", text: "Map journeys, IA and key states." },
        { title: "Design", text: "Create high-fidelity UI and interaction." },
        { title: "Handoff", text: "Specs, components and engineering support." },
      ],
      benefits: [
        "Clearer product journeys",
        "Faster design-to-engineering cycles",
        "A premium interface that still feels simple",
      ],
      faq: [
        { q: "Do you design and then also build?", a: "We can design only, or continue into frontend implementation." },
        { q: "Can you audit an existing product?", a: "Yes. UX reviews are often the fastest way to unlock the next release." },
      ],
    }),
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce-development",
    icon: "shopping-bag",
    category: "Engineering",
    description: "Conversion-focused storefronts with catalogues, checkout, payments and operations built for growth.",
    content: serviceContent({
      overview:
        "We build commerce experiences that look premium and work under load — catalogue, cart, checkout, payments and the operations behind them.",
      problems: [
        { title: "Leaky checkout", text: "Friction in cart and payment quietly kills revenue." },
        { title: "Operations lag", text: "Orders, inventory and fulfilment are not designed as one system." },
        { title: "Generic storefront", text: "The shop looks like every other template in the category." },
      ],
      approach: [
        { title: "Commerce as product", text: "We treat merchandising, search and checkout as core UX, not plugins." },
        { title: "Reliable payments", text: "Integrations are designed for failure states, not just the happy path." },
        { title: "Grow later", text: "Architecture leaves room for subscriptions, B2B pricing or new regions." },
      ],
      features: [
        "Custom storefronts",
        "Product catalogues",
        "Checkout experiences",
        "Payment integrations",
        "Order management",
        "Inventory foundations",
        "Performance and SEO",
      ],
      tools: ["React", "Node.js", "PostgreSQL", "Stripe-ready APIs", "AWS"],
      process: [
        { title: "Map", text: "Catalogue, checkout and operations flow." },
        { title: "Design", text: "Merchandising and conversion UX." },
        { title: "Build", text: "Storefront, APIs and admin needs." },
        { title: "Launch", text: "Payments, testing and go-live support." },
      ],
      benefits: [
        "A storefront that matches the brand",
        "Cleaner checkout and payment flows",
        "A foundation for catalogue growth",
      ],
      faq: [
        { q: "Do you rebuild existing shops?", a: "Yes. We can migrate catalogue and customer journeys onto a new stack." },
        { q: "Can you integrate our payment provider?", a: "We integrate common processors and design for your existing finance stack." },
      ],
    }),
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    icon: "cloud",
    category: "Engineering",
    description: "Secure cloud infrastructure, containers and delivery pipelines that keep products reliable as they scale.",
    content: serviceContent({
      overview:
        "We help teams ship more safely — cloud architecture, containers, CI/CD, observability and the operating habits that keep systems healthy.",
      problems: [
        { title: "Fragile deploys", text: "Releases are manual, late-night and hard to roll back." },
        { title: "Unclear ownership", text: "Nobody knows what is running, or why last month's bill jumped." },
        { title: "No visibility", text: "Incidents are discovered by customers, not dashboards." },
      ],
      approach: [
        { title: "Right-sized architecture", text: "We choose the simplest cloud shape that still meets the risk profile." },
        { title: "Automate the path", text: "Build, test and deploy become a repeatable pipeline." },
        { title: "Observe first", text: "Logs, metrics and alerts are treated as product infrastructure." },
      ],
      features: [
        "Cloud architecture",
        "AWS foundations",
        "Containerised workloads",
        "CI/CD pipelines",
        "Environment strategy",
        "Monitoring basics",
        "Secure configuration",
      ],
      tools: ["AWS", "GitHub Actions", "Node.js", "PostgreSQL", "Nginx"],
      process: [
        { title: "Assess", text: "Review current hosting, risk and release process." },
        { title: "Design", text: "Target architecture and pipeline." },
        { title: "Implement", text: "Provision, containerise and automate." },
        { title: "Handover", text: "Runbooks and operating cadence." },
      ],
      benefits: [
        "More predictable releases",
        "Clearer environments and ownership",
        "A cloud setup that can grow with the product",
      ],
      faq: [
        { q: "Do you manage production after launch?", a: "We can hand over or stay on for retained operations." },
        { q: "Can you work with an existing AWS account?", a: "Yes. We improve what is there rather than forcing a rebuild." },
      ],
    }),
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    icon: "file-text",
    category: "Growth",
    description: "Editorial systems, landing content and thought leadership that support SEO, sales and brand.",
    content: serviceContent({
      overview:
        "We build content engines — not one-off blogs — so the site, sales team and social channels share a coherent story.",
      problems: [
        { title: "Random acts of content", text: "Posts go out, but nothing compounds." },
        { title: "No owner of quality", text: "Voice, accuracy and design vary by whoever had time." },
        { title: "Disconnected from sales", text: "Content does not help buyers decide." },
      ],
      approach: [
        { title: "Editorial strategy", text: "We define pillars, audience jobs and the formats that serve them." },
        { title: "Production system", text: "Briefs, drafts, design and publishing follow a repeatable path." },
        { title: "Distribution", text: "Each piece is planned for site, social and sales enablement." },
      ],
      features: [
        "Content strategy",
        "Website copy",
        "Thought leadership",
        "Landing page content",
        "Editorial calendars",
        "Content SEO support",
        "Repurposing systems",
      ],
      tools: ["Figma", "Google Analytics", "Search Console", "CMS workflows"],
      process: [
        { title: "Strategy", text: "Audience, pillars and proof points." },
        { title: "Calendar", text: "Themes, owners and ship dates." },
        { title: "Produce", text: "Write, design and review." },
        { title: "Measure", text: "See what helps discovery and conversion." },
      ],
      benefits: [
        "A clearer brand voice",
        "Content that supports search and sales",
        "A production rhythm the team can keep",
      ],
      faq: [
        { q: "Do you write technical content?", a: "Yes. We work with subject-matter experts and can interview your team." },
        { q: "Can you also design the visuals?", a: "Strategy, writing and design can sit together." },
      ],
    }),
  },
  {
    title: "Website Maintenance & Support",
    slug: "website-maintenance",
    icon: "shield-check",
    category: "Operations",
    description: "Ongoing updates, monitoring, backups and improvements that keep digital products healthy after launch.",
    content: serviceContent({
      overview:
        "Launch is the start. We keep sites and applications current, secure and improving with a clear support model.",
      problems: [
        { title: "Orphaned products", text: "The build partner disappeared and nobody owns updates." },
        { title: "Silent breakage", text: "Forms, tracking or checkout fail without anyone noticing." },
        { title: "Small changes take weeks", text: "There is no path for routine improvements." },
      ],
      approach: [
        { title: "Watch the product", text: "Uptime, errors and core journeys are monitored." },
        { title: "Plan the work", text: "Updates, security and enhancements sit on a monthly cadence." },
        { title: "Respond quickly", text: "There is a defined path for incidents and urgent edits." },
      ],
      features: [
        "Updates and patches",
        "Uptime monitoring",
        "Backup routines",
        "Performance checks",
        "Content and feature tweaks",
        "Security hygiene",
        "Priority support",
      ],
      tools: ["Git", "AWS", "Uptime monitoring", "PostgreSQL"],
      process: [
        { title: "Onboard", text: "Access, inventory and health baseline." },
        { title: "Operate", text: "Monthly maintenance and reporting." },
        { title: "Improve", text: "Small product improvements each cycle." },
        { title: "Escalate", text: "Clear incident response when needed." },
      ],
      benefits: [
        "A product that stays current",
        "Faster response when something breaks",
        "A predictable cost for ongoing care",
      ],
      faq: [
        { q: "Do you only support sites you built?", a: "We can take over well-structured existing products after an audit." },
        { q: "What is included each month?", a: "We agree a scope covering updates, monitoring, hours for changes and reporting." },
      ],
    }),
  },
];

const projects = [
  {
    title: "Lumen Commerce",
    slug: "lumen-commerce",
    category: "Web Development",
    image: "aurora",
    description: "A conversion-focused storefront and operations console for a contemporary home brand.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    projectUrl: null,
  },
  {
    title: "Northline ERP",
    slug: "northline-erp",
    category: "Software",
    image: "orbit",
    description: "Modular operations software that replaced fragmented spreadsheets for a logistics team.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    projectUrl: null,
  },
  {
    title: "Fieldnote Mobile",
    slug: "fieldnote-mobile",
    category: "Mobile",
    image: "pulse",
    description: "A cross-platform field app with offline capture, notifications and a real-time dashboard.",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    projectUrl: null,
  },
  {
    title: "Helios Growth System",
    slug: "helios-growth-system",
    category: "Marketing",
    image: "flare",
    description: "A fictional campaign system covering search, social and landing pages for a B2B SaaS launch.",
    technologies: ["Google Ads", "Analytics", "Figma"],
    projectUrl: null,
  },
  {
    title: "Aurelia Identity",
    slug: "aurelia-identity",
    category: "Branding",
    image: "prism",
    description: "A complete visual identity, guidelines and launch kit for a climate-tech studio.",
    technologies: ["Figma", "Brand systems"],
    projectUrl: null,
  },
  {
    title: "Atlas Control",
    slug: "atlas-control",
    category: "UI/UX",
    image: "grid",
    description: "A dense-but-calm design system for an analytics product used by operations leads.",
    technologies: ["Figma", "React", "Design tokens"],
    projectUrl: null,
  },
];

const testimonials = [
  {
    clientName: "Amelia Hart",
    company: "Vertex Collective",
    role: "Head of Digital",
    avatar: "AH",
    rating: 5,
    content:
      "HNitSolutions felt like an in-house product team. The site, the CMS and the launch plan were treated as one system, not three vendors.",
  },
  {
    clientName: "Rohan Mehta",
    company: "NovaLabs",
    role: "Founder",
    avatar: "RM",
    rating: 5,
    content:
      "They translated a messy operations brief into software our team actually uses. The architecture decisions still look right a year later.",
  },
  {
    clientName: "Sofia Alvarez",
    company: "Aurex Studio",
    role: "Creative Director",
    avatar: "SA",
    rating: 5,
    content:
      "The brand and web work finally match the quality of the product. Restraint, typography and motion were handled with unusual care.",
  },
  {
    clientName: "James Okoye",
    company: "Cloudly",
    role: "COO",
    avatar: "JO",
    rating: 5,
    content:
      "Our mobile app and API landed on time, with the unglamorous pieces — auth, notifications, monitoring — done properly.",
  },
  {
    clientName: "Priya Nair",
    company: "BrightCore",
    role: "Marketing Lead",
    avatar: "PN",
    rating: 5,
    content:
      "Search and landing-page work was commercial without being loud. Reporting is honest, and they never oversold outcomes.",
  },
  {
    clientName: "Luca Bianchi",
    company: "Harborline",
    role: "Product Manager",
    avatar: "LB",
    rating: 5,
    content:
      "The UX system made a complex console feel navigable. Engineering received components they could actually ship against.",
  },
];

module.exports = { services, projects, testimonials };
