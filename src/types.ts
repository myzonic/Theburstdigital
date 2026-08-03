export type PageRoute = 
  | 'home'
  | 'services'
  | 'service-detail'
  | 'portfolio'
  | 'about'
  | 'pricing'
  | 'blog'
  | 'contact'
  | 'quote'
  | 'privacy'
  | 'terms';

export type ViewMode = 'live' | 'dual-ref' | 'desktop' | 'mobile';

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  badge?: string;
  items: string[];
  slug: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Ecommerce' | 'Mobile Apps' | 'Branding' | 'Graphic Design' | 'Publishing' | 'Video Editing';
  client: string;
  location: string;
  description: string;
  image: string;
  stats: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceGb: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogType: string;
  schemaJson: Record<string, any>;
}
