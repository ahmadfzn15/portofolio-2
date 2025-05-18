export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export const timelineItems: TimelineItem[] = [
  // Work Experience
  {
    id: 1,
    title: "Senior Frontend Developer",
    organization: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Lead the frontend development team in creating responsive, accessible web applications. Implemented performance optimizations that improved load times by 40%. Mentored junior developers and established coding standards.",
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with UX designers to implement intuitive user interfaces. Reduced API response times by 30% through query optimizations.",
    type: "work"
  },
  {
    id: 3,
    title: "Mobile Developer",
    organization: "AppWorks Studio",
    period: "2018 - 2020",
    description: "Built cross-platform mobile applications using Flutter and React Native. Integrated RESTful APIs and implemented offline functionality. Published 5 apps to App Store and Google Play with 4.5+ star ratings.",
    type: "work"
  },
  
  // Education
  {
    id: 4,
    title: "MSc in Computer Science",
    organization: "Tech University",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Machine Learning. Graduated with distinction. Thesis on 'Optimizing Progressive Web Applications for Low-Bandwidth Environments'.",
    type: "education"
  },
  {
    id: 5,
    title: "BSc in Computer Science",
    organization: "State University",
    period: "2012 - 2016",
    description: "Focused on programming fundamentals, data structures, and algorithms. Participated in hackathons and coding competitions. Graduated with honors.",
    type: "education"
  }
];