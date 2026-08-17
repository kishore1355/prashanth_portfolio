export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: (string | Skill)[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  score?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  location?: string;
  badge?: string;
}

export interface ActivityItem {
  title: string;
  category: 'Workshop' | 'Leadership' | 'Volunteer' | 'Club';
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI/ML' | 'Python Backend' | 'Full Stack' | 'Academic';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  imageBgGradient: string;
  iconName: string;
  featured: boolean;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface StatMetric {
  label: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  motto: string;
  githubUrl?: string;
  linkedinUrl?: string;
  whatsappUrl?: string;
}

export type ThemeMode = 'dark' | 'light';

