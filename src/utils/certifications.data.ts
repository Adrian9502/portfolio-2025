export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  imageUrl: string;
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    credentialUrl: "https://coursera.org/verify/...",
    skills: ["React", "JavaScript", "Frontend Development"],
    imageUrl: "/certifications/react-meta.png",
  },
  {
    id: "2",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "https://freecodecamp.org/certification/...",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    imageUrl: "/certifications/freecodecamp.png",
  },
  {
    id: "3",
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2023",
    credentialUrl: "https://coursera.org/verify/...",
    skills: ["MERN Stack", "Node.js", "MongoDB", "Express"],
    imageUrl: "/certifications/coursera.png",
  },
];
