export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully-featured e-commerce platform with payment processing, inventory management, and a responsive design.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with real-time data visualization and reporting.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts, nutrition, and progress with customizable goals and achievements.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Flutter", "Firebase", "Provider", "RESTful API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "A web application that leverages AI to generate blog posts, social media content, and marketing copy.",
    image: "https://images.pexels.com/photos/9088287/pexels-photo-9088287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#"
  }
];