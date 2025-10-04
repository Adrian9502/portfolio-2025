export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack";
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN application with authentication and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Adrian9502/ecommerce",
    imageUrl: "/projects/ecommerce.png",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A modern task management application with drag-and-drop functionality",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Adrian9502/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    imageUrl: "/projects/task-manager.png",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts",
    technologies: ["React", "API Integration", "Chart.js"],
    githubUrl: "https://github.com/Adrian9502/weather-app",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    imageUrl: "/projects/weather-app.png",
    featured: false,
    category: "web",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    githubUrl: "https://github.com/Adrian9502/portfolio-2025",
    liveUrl: "https://john-adrian-bonto.vercel.app",
    imageUrl: "/projects/portfolio.png",
    featured: true,
    category: "web",
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Adrian9502/social-dashboard",
    imageUrl: "/projects/social-dashboard.png",
    featured: false,
    category: "fullstack",
  },
];
