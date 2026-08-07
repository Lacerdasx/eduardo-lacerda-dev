export interface TimelineEntry {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  id: string;
  course: string;
  institution: string;
  period: string;
  status: string;
}

export interface StackCategory {
  id: string;
  label: string;
  items: string[];
}

export type ProjectTag = 'security' | 'tool' | 'game' | 'ai' | 'dashboard' | 'web';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  url: string | null;
  placeholder: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  location: string;
}
