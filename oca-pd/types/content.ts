export type Locale = 'ar' | 'en';

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  images: string[];
  locale: Locale;
  published: boolean;
}

export interface Activity extends ContentItem {}
export interface NewsItem extends ContentItem {}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  order: number;
  locale: Locale;
  published: boolean;
}

export interface Program extends ContentItem {
  icon?: string;
}

export interface Stats {
  families: number;
  sessions: number;
  tools: number;
  activities: number;
  partners: number;
  homeModifications: number;
  registeredCases: number;
}
