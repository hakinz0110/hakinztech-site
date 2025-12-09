// Content Management System
// Edit the JSON files in src/content/ to update your site content
// Changes will reflect after rebuilding (or in dev mode, after refresh)

import siteContentData from '@/content/site-content.json';
import projectsData from '@/content/projects.json';

// Types
export type ProfileImage = {
  src: string;
  fallback: string;
  alt: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  availableForHire: boolean;
  yearsExperience: string;
  location: string;
  responseTime: string;
  email: string;
  phone: string;
  images: ProfileImage[];
  typingPhrases: string[];
  highlights: string[];
};

export type Social = {
  github: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
};

export type Stats = {
  yearsExperience: string;
  projectsCompleted: string;
  happyClients: string;
  technologies: string;
};

export type Principle = {
  icon: string;
  title: string;
  description: string;
};

export type About = {
  headline: string;
  paragraphs: string[];
  principles: Principle[];
};

export type CoreSkill = {
  name: string;
  level: number;
  color: string;
};

export type Skills = {
  coreSkills: CoreSkill[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrls: string[];
  tags: string[];
  liveSiteUrl?: string;
  sourceCodeUrl?: string;
};

export type SiteContent = {
  profile: Profile;
  social: Social;
  stats: Stats;
  about: About;
  skills: Skills;
};

// Export content
export const siteContent: SiteContent = siteContentData;
export const projects: Project[] = projectsData.projects;

// Helper functions
export function getProfile(): Profile {
  return siteContent.profile;
}

export function getSocial(): Social {
  return siteContent.social;
}

export function getStats(): Stats {
  return siteContent.stats;
}

export function getAbout(): About {
  return siteContent.about;
}

export function getSkills(): Skills {
  return siteContent.skills;
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
}
