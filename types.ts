export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string; // URL
  link: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: number;
  year: string;
  role: string;
  company: string;
  location: string;
  type: 'Work' | 'Talk' | 'Award';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
