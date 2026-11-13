export interface SiteConfig {
  name: string;
  slug: string;
  tagline: string;
  subTagline: string;
  values: string[];
  niche: string;
  tiktok: {
    handle: string;
    url: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    whatsappUrl: string;
  };
  copyright: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  timeframe?: string;
  description?: string;
  publish?: boolean;
}

export interface DemographicSlice {
  label: string;
  percentage: number;
  highlight?: boolean;
}

export interface TrafficSource {
  source: string;
  percentage: number;
}

export interface AudienceMetrics {
  sourceDate: string;
  sourceNote: string;
  overview: {
    totalViews365d: MetricItem;
    totalAudience: MetricItem;
    newAudience: MetricItem;
    shares365d: MetricItem;
    profileViews365d: MetricItem;
    comments365d: MetricItem;
    followers: MetricItem;
    profileLikes: MetricItem;
    likes365d: MetricItem;
  };
  viewers: {
    gender: DemographicSlice[];
    age: DemographicSlice[];
    traffic: TrafficSource[];
    countries: string[];
  };
  followers: {
    gender: DemographicSlice[];
    age: DemographicSlice[];
    countries: string[];
  };
}

export interface CollaborationPackage {
  id: "mini" | "starter" | "advantage" | "custom";
  name: string;
  subtitle: string;
  price: number | null;
  currency: string;
  pricePerVideo?: string;
  savingsBadge?: string;
  featured: boolean;
  featuredTag?: string;
  deliverables: string[];
  guarantees: string[];
  turnaroundDays: number;
  revisions: number;
  suitableFor: string;
  ctaText: string;
}

export interface AddonService {
  id: string;
  title: string;
  description: string;
  pricingNote: string;
}

export interface CollaborationService {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "surec" | "fiyat" | "icerik" | "hukuk";
}

export interface PrincipleItem {
  title: string;
  description: string;
  iconName: string;
}

export interface BriefFormData {
  brandName: string;
  contactName: string;
  email: string;
  phone: string;
  selectedPackage: string;
  selectedPlatform: string[];
  campaignGoal: string;
  budgetRange: string;
  targetDate?: string;
  notes?: string;
  termsAccepted: boolean;
}
