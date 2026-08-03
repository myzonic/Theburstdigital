import { ServiceCategory, PortfolioItem, Testimonial, PricingPlan, ProcessStep, SeoMetadata } from '../types';

export const AGENCY_INFO = {
  name: "Burst Digital",
  shortName: "BD",
  tagline: "BUILD • LAUNCH • GROW",
  headline: "Helping UK Businesses Build, Launch & Grow Digitally.",
  subheadline: "Custom websites, mobile apps, branding, creative design, bookkeeping, accounting and business solutions—all delivered by one trusted digital agency.",
  address: "Ancells Business Park, Harvest Crescent, Fleet, Hampshire, GU51",
  phone: "+44 (0)20 7946 0800",
  whatsapp: "+44 (0)20 7946 0912",
  email: "Contact@theburstdigital.co.uk",
  workingHours: "Mon - Fri: 8:30 AM - 6:00 PM GMT",
  stats: {
    projects: "500+",
    clients: "250+",
    satisfaction: "99%",
    experience: "10+",
    support: "24/7"
  }
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-dev",
    title: "WEBSITE DEVELOPMENT",
    iconName: "Globe",
    shortDesc: "Custom websites, web applications, SaaS platforms and enterprise solutions.",
    badge: "Popular",
    slug: "website-development",
    items: [
      "Custom React Website Development",
      "Next.js Development",
      "Vue.js Development",
      "HTML5/CSS3 Websites",
      "Tailwind CSS Development",
      "Python Django Development",
      "PHP Development",
      "Laravel Development",
      "Node.js Development",
      "Express.js Development",
      "Full Stack Web Applications",
      "Enterprise Web Portals",
      "Progressive Web Apps (PWA)",
      "SaaS Platforms",
      "CRM Development",
      "ERP Systems",
      "Dashboard Development",
      "API Integration",
      "Database Design"
    ]
  },
  {
    id: "cms-dev",
    title: "CMS DEVELOPMENT",
    iconName: "Layout",
    shortDesc: "Headless & traditional content management systems built for speed and effortless editing.",
    slug: "cms-development",
    items: [
      "WordPress Development",
      "Shopify Development",
      "WooCommerce",
      "Wix Development",
      "Squarespace",
      "Webflow Development",
      "Square Online",
      "BigCommerce",
      "Magento",
      "Joomla",
      "Drupal",
      "HubSpot CMS",
      "Framer Websites",
      "Custom CMS Development"
    ]
  },
  {
    id: "ecommerce",
    title: "ECOMMERCE",
    iconName: "ShoppingCart",
    shortDesc: "Powerful online stores, secure payments and scalable ecommerce platforms.",
    badge: "High ROI",
    slug: "ecommerce",
    items: [
      "Shopify Stores",
      "WooCommerce Stores",
      "Square Online Stores",
      "Custom Ecommerce",
      "Product Upload",
      "Payment Gateway Integration",
      "Subscription Websites",
      "Booking Systems",
      "Marketplace Development"
    ]
  },
  {
    id: "mobile-apps",
    title: "MOBILE APP DEVELOPMENT",
    iconName: "Smartphone",
    shortDesc: "iOS, Android & cross-platform apps that deliver flawless user experiences.",
    badge: "Native & Cross",
    slug: "mobile-app-development",
    items: [
      "Android App Development",
      "iOS App Development",
      "Cross Platform Apps",
      "Flutter Development",
      "React Native",
      "Business Apps",
      "Ecommerce Apps",
      "Booking Apps",
      "Healthcare Apps",
      "Education Apps",
      "Food Delivery Apps",
      "Custom Mobile Solutions"
    ]
  },
  {
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    iconName: "Palette",
    shortDesc: "Stunning branding, UI/UX, marketing materials and creative design assets.",
    slug: "graphic-design",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Graphic Design",
      "Flyer Design",
      "Brochure Design",
      "Company Profile Design",
      "Business Card Design",
      "Social Media Design",
      "Banner Design",
      "Poster Design",
      "Label Design",
      "Packaging Design",
      "Sticker Design",
      "Menu Design",
      "Catalogue Design",
      "Presentation Design",
      "Infographic Design",
      "Illustration Design",
      "Mascot Design",
      "Icon Design",
      "UI Design",
      "UX Design",
      "Landing Page Design"
    ]
  },
  {
    id: "publishing-design",
    title: "PUBLISHING DESIGN",
    iconName: "BookOpen",
    shortDesc: "Professional print and digital book cover, layout and magazine design.",
    slug: "publishing-design",
    items: [
      "Book Cover Design",
      "eBook Cover Design",
      "Hardcover Design",
      "Paperback Design",
      "Book Back Cover Design",
      "Full Book Cover Wrap",
      "Kindle Cover Design",
      "Workbook Design",
      "Journal Design",
      "Magazine Design",
      "Newsletter Design"
    ]
  },
  {
    id: "video-media",
    title: "VIDEO & MEDIA",
    iconName: "Video",
    shortDesc: "High-impact video editing, motion graphics, YouTube and social media content.",
    badge: "Trending",
    slug: "video-and-media",
    items: [
      "Video Editing",
      "Promotional Videos",
      "YouTube Editing",
      "Shorts & Reels",
      "Motion Graphics",
      "Intro & Outro Videos",
      "Corporate Videos",
      "Product Videos",
      "Social Media Videos",
      "Subtitle Editing",
      "Thumbnail Design"
    ]
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    iconName: "Megaphone",
    shortDesc: "SEO, PPC, social media & content strategies that drive verified revenue growth.",
    badge: "Top Growth",
    slug: "digital-marketing",
    items: [
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "Technical SEO",
      "Google Business Profile Optimization",
      "PPC Advertising",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "Email Marketing",
      "Social Media Management",
      "Content Marketing",
      "Conversion Rate Optimization"
    ]
  },
  {
    id: "business-services",
    title: "BUSINESS SERVICES",
    iconName: "Calculator",
    shortDesc: "Bookkeeping, accounting, payroll, VAT & strategic business consulting.",
    slug: "business-services",
    items: [
      "Professional Bookkeeping",
      "Accounting Support",
      "QuickBooks Support",
      "Xero Support",
      "Payroll Assistance",
      "Financial Reporting",
      "Invoice Management",
      "Expense Tracking",
      "VAT Assistance",
      "Business Consulting"
    ]
  },
  {
    id: "career-services",
    title: "CAREER SERVICES",
    iconName: "Briefcase",
    shortDesc: "Executive CV writing, LinkedIn optimization, cover letters and interview coaching.",
    slug: "career-services",
    items: [
      "Professional CV Writing",
      "Resume Writing",
      "Executive Resume",
      "LinkedIn Profile Optimization",
      "Cover Letter Writing",
      "Personal Statement Writing",
      "Interview Preparation"
    ]
  }
];

export const WHY_CHOOSE_US = [
  { title: "UK Quality Standards", desc: "Built strictly to British quality benchmarks with ISO-certified workflow.", icon: "CheckCircle2" },
  { title: "100% Custom Solutions", desc: "No generic templates. Every line of code & design pixel is tailored.", icon: "Sparkles" },
  { title: "Premium UI/UX", desc: "World-class visual quality inspired by Apple, Stripe, Linear & Vercel.", icon: "Layers" },
  { title: "Experienced Team", desc: "UK-based senior designers, engineers, accountants and marketers.", icon: "Users" },
  { title: "Fast Turnaround", desc: "Agile sprint delivery ensuring rapid time-to-market without compromises.", icon: "Zap" },
  { title: "Mobile First Design", desc: "Flawless responsivity optimized for smartphones, tablets & 4K displays.", icon: "Smartphone" },
  { title: "SEO Friendly", desc: "Semantically engineered for instant indexing and top Google UK rankings.", icon: "TrendingUp" },
  { title: "Secure Development", desc: "GDPR compliant, cyber essentials certified & bank-grade encryption.", icon: "ShieldCheck" },
  { title: "Scalable Architecture", desc: "Cloud-native infrastructure ready to handle millions of active users.", icon: "Server" },
  { title: "Transparent Communication", desc: "Dedicated UK project managers, regular updates & clear milestones.", icon: "MessageSquare" },
  { title: "Dedicated Support", desc: "24/7 UK helpline, emergency SLA coverage & ongoing maintenance.", icon: "Headphones" },
  { title: "Affordable Pricing", desc: "Transparent, predictable pricing with maximum ROI for UK businesses.", icon: "PoundSterling" }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Fintech Banking Portal & Mobile App",
    category: "Websites",
    client: "Apex Wealth UK",
    location: "London, UK",
    description: "Next.js 15 enterprise banking platform with real-time analytics, open banking API integrations, and biometric mobile application.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stats: "+340% User Onboarding Speed",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js", "Fintech"]
  },
  {
    id: "port-2",
    title: "Luxury Fashion Ecommerce Store",
    category: "Ecommerce",
    client: "Savile Row Atelier",
    location: "Mayfair, London",
    description: "Bespoke Shopify Plus store featuring 3D product visualizer, custom size recommender, and multi-currency checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    stats: "£2.4M Revenue in Q1",
    tags: ["Shopify Plus", "3D WebGL", "UI/UX", "Payment Gateway"]
  },
  {
    id: "port-3",
    title: "NHS Partner Telehealth iOS/Android App",
    category: "Mobile Apps",
    client: "CarePulse Health",
    location: "Manchester, UK",
    description: "HIPAA & NHS IG compliant React Native app enabling video consultations, prescription tracking and AI symptom checker.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    stats: "150k+ Active Patients",
    tags: ["React Native", "Healthcare", "iOS", "Android", "AWS"]
  },
  {
    id: "port-4",
    title: "Global Enterprise Rebranding & Identity",
    category: "Branding",
    client: "Strata Logistics Corp",
    location: "Birmingham, UK",
    description: "Complete visual identity overhaul including custom typography system, brand guidelines book, 3D motion assets, and stationery.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    stats: "Awarded Red Dot 2025",
    tags: ["Brand Identity", "3D Design", "Typography", "Guidelines"]
  },
  {
    id: "port-5",
    title: "Commercial Property Investor Portal",
    category: "Graphic Design",
    client: "Kensington Real Estate",
    location: "London, UK",
    description: "High-end 48-page corporate prospectus, interactive floorplan brochure, and digital presentation deck for European investors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    stats: "£45M Investment Secured",
    tags: ["Print Design", "Corporate Profile", "Infographics", "UI Design"]
  },
  {
    id: "port-6",
    title: "Hardcover Architectural Monograph",
    category: "Publishing",
    client: "Foster & Thames Publishing",
    location: "Oxford, UK",
    description: "Premium gold-foil embossed hardcover book layout, color-matched print prepress, and Kindle edition wrap.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    stats: "5,000 Copies Sold Out",
    tags: ["Book Cover", "Hardcover Wrap", "Prepress", "Kindle"]
  },
  {
    id: "port-7",
    title: "National TV & Social Ad Campaign",
    category: "Video Editing",
    client: "Energise UK",
    location: "Edinburgh, UK",
    description: "4K motion graphics promo video, 15s Instagram Reels & TikTok cuts, color grading, and custom sound design.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    stats: "4.8M Organic Views",
    tags: ["Motion Graphics", "Reels/Shorts", "4K Video", "Sound Design"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision",
    description: "In-depth discovery session to map business goals, target audience, technical scope and competitive landscape.",
    deliverables: ["Project Roadmap", "Requirements Spec", "Competitor Benchmark"],
    icon: "Search"
  },
  {
    number: "02",
    title: "Research",
    subtitle: "Market & User Insights",
    description: "User persona profiling, SEO keyword gap analysis, UX wireframing, and tech stack evaluation.",
    deliverables: ["User Journey Maps", "Information Architecture", "SEO Strategy"],
    icon: "Compass"
  },
  {
    number: "03",
    title: "Strategy",
    subtitle: "Architecting Success",
    description: "Creating concrete milestones, technical design blueprints, conversion funnels and budget allocations.",
    deliverables: ["Technical Architecture", "Sprint Plan", "KPI Target Matrix"],
    icon: "Target"
  },
  {
    number: "04",
    title: "Design",
    subtitle: "Pixel-Perfect Craftsmanship",
    description: "High-fidelity interactive Figma prototypes, design systems, typography pairings and brand motion guidelines.",
    deliverables: ["Figma UI Kits", "Clickable Prototypes", "Design System"],
    icon: "Palette"
  },
  {
    number: "05",
    title: "Development",
    subtitle: "Clean, Scalable Code",
    description: "Frontend & backend engineering following strict clean code principles, microservices, and API security.",
    deliverables: ["Clean Codebase", "Database Schemas", "Staging Environment"],
    icon: "Code2"
  },
  {
    number: "06",
    title: "Testing",
    subtitle: "Rigorous Quality Assurance",
    description: "Cross-browser validation, mobile touch testing, WCAG 2.1 accessibility checks, and penetration security audits.",
    deliverables: ["QA Audit Report", "PageSpeed 99+ Score", "Security Pass"],
    icon: "CheckSquare"
  },
  {
    number: "07",
    title: "Launch",
    subtitle: "Smooth Deployment",
    description: "Zero-downtime server configuration, DNS routing, SSL certification, Google Search Console indexing and launch monitoring.",
    deliverables: ["Live Production Site", "SSL Certificate", "Search Indexing"],
    icon: "Rocket"
  },
  {
    number: "08",
    title: "Support",
    subtitle: "Continuous Growth",
    description: "24/7 UK support, automated daily backups, monthly security updates, and CRO traffic optimization.",
    deliverables: ["SLA Warranty", "Monthly Analytics", "24/7 Helpline"],
    icon: "HeartHandshake"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alastair Montgomery",
    role: "Chief Executive Officer",
    company: "Vanguard Capital UK",
    location: "City of London",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Burst Digital transformed our corporate portal and wealth app. Their engineering rigor, speed, and Swiss-inspired minimalism elevated our brand to Fortune 500 status. Outstanding UK team!",
    rating: 5,
    projectType: "Full Web & Mobile App"
  },
  {
    id: "t2",
    name: "Victoria Stirling",
    role: "Founder & Creative Director",
    company: "Stirling & Co Luxury Goods",
    location: "Mayfair, London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "Our Shopify store revenue increased by 280% within 90 days of launch. The UI/UX is world-class, matching Apple and Stripe. Burst Digital handles our dev, branding, and bookkeeping seamlessly.",
    rating: 5,
    projectType: "Ecommerce & Branding"
  },
  {
    id: "t3",
    name: "Dr. Jonathan Hughes",
    role: "Medical Director",
    company: "Harley Street Health Group",
    location: "Marylebone, London",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "The mobile telehealth app developed by Burst Digital is NHS-compliant, lightning fast, and effortless for our patients. Their team is responsive, professional, and truly top tier.",
    rating: 5,
    projectType: "Mobile App & Compliance"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for UK Startups & Small Businesses launching digitally.",
    priceGb: "£1,499",
    period: "one-time",
    idealFor: "Startups & Local SMEs",
    features: [
      "Custom 5-Page Responsive Website",
      "React / Next.js Fast Loading Tech",
      "Mobile First & SEO Optimized",
      "Basic Logo & Branding Kit",
      "Google Business Profile Setup",
      "Contact Form & WhatsApp Integration",
      "SSL Certificate & Free Hosting Setup",
      "30 Days Post-Launch Support"
    ],
    ctaText: "Get Started →"
  },
  {
    id: "pro",
    name: "Professional",
    tagline: "For growing companies needing end-to-end digital excellence.",
    priceGb: "£3,999",
    period: "one-time",
    isPopular: true,
    idealFor: "Growing UK SMEs & E-Commerce",
    features: [
      "Up to 15-Page Custom Web Application",
      "Full Ecommerce / CMS Integration",
      "Custom Graphic & Publishing Design",
      "Complete Brand Identity Suite",
      "Technical SEO & Content Strategy",
      "Payment Gateway & API Integrations",
      "Xero / QuickBooks Bookkeeping Setup",
      "12 Months Maintenance & SLA 24/7"
    ],
    ctaText: "Build Your Project →"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Tailored digital transformation for established UK corporations.",
    priceGb: "£8,999+",
    period: "bespoke",
    idealFor: "Large Enterprises & FinTech",
    features: [
      "Unlimited Web & Mobile App Architecture",
      "iOS & Android Native App Development",
      "Custom SaaS, CRM & ERP Engineering",
      "Dedicated UK Squad (Devs, Design, PM)",
      "Full Digital Marketing & Video Ad Suite",
      "Complete Accounting & VAT Services",
      "Penetration Security & ISO Compliance",
      "Dedicated 24/7 Account Executive"
    ],
    ctaText: "Schedule Consultation →"
  }
];

export const SEO_METADATA_MAP: Record<string, SeoMetadata> = {
  home: {
    title: "Burst Digital | UK's #1 Full-Service Digital Agency",
    description: "Burst Digital is a premier UK digital agency offering custom websites, mobile apps, graphic design, SEO, bookkeeping & business solutions across London & UK.",
    keywords: ["digital agency uk", "web development agency London", "mobile app developer uk", "graphic design agency", "uk bookkeeping services"],
    canonicalUrl: "https://burstdigital.co.uk/",
    ogType: "website",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "DigitalDocumentService",
      "name": "Burst Digital",
      "url": "https://burstdigital.co.uk",
      "logo": "https://burstdigital.co.uk/assets/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ancells Business Park, Harvest Crescent",
        "addressLocality": "Fleet",
        "addressRegion": "Hampshire",
        "postalCode": "GU51",
        "addressCountry": "GB"
      },
      "telephone": "+442079460800",
      "priceRange": "£££"
    }
  },
  services: {
    title: "Our Digital Services | Burst Digital UK",
    description: "Explore Burst Digital's full spectrum of services: Web Development, Mobile Apps, Graphic Design, Publishing, Video, SEO, Bookkeeping & Career Coaching.",
    keywords: ["web dev services uk", "cms development london", "ecommerce agency uk", "digital marketing agency"],
    canonicalUrl: "https://burstdigital.co.uk/services",
    ogType: "service",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Agency Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Burst Digital"
      }
    }
  },
  portfolio: {
    title: "Our Work & Portfolio | Burst Digital UK",
    description: "View case studies and award-winning projects crafted by Burst Digital for UK startups, SMEs, and enterprise brands.",
    keywords: ["burst digital portfolio", "web design case studies uk", "mobile app portfolio london"],
    canonicalUrl: "https://burstdigital.co.uk/portfolio",
    ogType: "website",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Burst Digital Portfolio"
    }
  },
  pricing: {
    title: "Transparent Pricing Plans | Burst Digital UK",
    description: "Fair, transparent pricing for web development, app creation, graphic design, and digital marketing in the UK.",
    keywords: ["web design cost uk", "app development price london", "burst digital pricing"],
    canonicalUrl: "https://burstdigital.co.uk/pricing",
    ogType: "website",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Digital Services Pricing"
    }
  },
  contact: {
    title: "Contact Burst Digital | UK Digital Agency",
    description: "Get in touch with Burst Digital London team for a free project quote, WhatsApp consultation or phone call.",
    keywords: ["contact burst digital", "london digital agency contact", "free digital quote uk"],
    canonicalUrl: "https://burstdigital.co.uk/contact",
    ogType: "website",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Burst Digital"
    }
  }
};
