export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 82, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'Firebase', level: 85, category: 'backend' },
  
  // Mobile
  { name: 'Flutter', level: 85, category: 'mobile' },
  { name: 'React Native', level: 80, category: 'mobile' },
  { name: 'Swift', level: 65, category: 'mobile' },
  
  // Other
  { name: 'Git', level: 90, category: 'other' },
  { name: 'Docker', level: 78, category: 'other' },
  { name: 'CI/CD', level: 75, category: 'other' },
  { name: 'AWS', level: 70, category: 'other' },
];