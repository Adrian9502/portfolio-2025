import certificate1 from "/certificates/assets/CareerEssentialsInSoftwareDevelopmentByMicrosoftAndLinkedIn.png";
import certificate2 from "/certificates/assets/IntroductionToCareerSkillsInSoftwareDevelopment.png";
import certificate3 from "/certificates/assets/ProgrammingFoundationsBeyondTheFundamentals.png";
import certificate4 from "/certificates/assets/ProgrammingFoundationsFundamentals.png";
// coursera
import certificate5 from "/certificates/assets/CourseraIntroductionToAI.png";
import certificate6 from "/certificates/assets/Foundation of User Experience (UX) Design.png";
import certificate7 from "/certificates/assets/Start the UX Design Process Empathize Define and Ideate.png";
import certificate8 from "/certificates/assets/Use AI Responsibly.png";
import certificate9 from "/certificates/assets/Maximize Productivity With AI Tools.png";
import certificate10 from "/certificates/assets/Discover the Art of Prompting.png";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    issuer: "LinkedIn",
    date: "Aug 28, 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/494f0ff398c9359c5e1d7714520d48b37b8d0deb6dbeded5c1c8c008922d470c?trk=share_certificate",
    imageUrl: certificate1,
  },
  {
    id: "2",
    title: "Introduction to Career Skills in Software Development",
    issuer: "LinkedIn",
    date: "Aug 25, 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/dbc20b1ddafd2ecdf717296e9f0445ccdeec59c37cc2f4a27bb28feef2e3caa3?trk=share_certificate",
    imageUrl: certificate2,
  },
  {
    id: "3",
    title: "Programming Foundations: Beyond the Fundamentals",
    issuer: "LinkedIn",
    date: "Aug 28, 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/22e9ec2c563c683139ecfe9a4bdb1f836ef0997d85782fda95d5b661ef002544?trk=share_certificate",
    imageUrl: certificate3,
  },
  {
    id: "4",
    title: "Programming Foundations Fundamentals",
    issuer: "LinkedIn",
    date: "Aug 28, 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/2e99d39b687bef4eae2f1c9e02a88fc51260a7bb1ba303bc56dfe28c64186c2f?trk=share_certificate",
    imageUrl: certificate4,
  },
  // coursera
  // Introduction to AI
  {
    id: "5",
    title: "Introduction to AI",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/4VEJ9C3TZ8K4",
    imageUrl: certificate5,
  },
  // Foundation of User Experience (UX) Design
  {
    id: "6",
    title: "Foundation of User Experience (UX) Design",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/2B9DMQD9H12I",
    imageUrl: certificate6,
  },
  // Start the UX Design Process: Empathize, Define, and Ideate
  {
    id: "7",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/VZK75STWSNU6",
    imageUrl: certificate7,
  },
  // Use AI Responsibly
  {
    id: "8",
    title: "Use AI Responsibly",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/TYELQBVF8G52",
    imageUrl: certificate8,
  },
  // Maximize Productivity With AI Tools
  {
    id: "9",
    title: "Maximize Productivity With AI Tools",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/2ZD6U7WJSL9Q",
    imageUrl: certificate9,
  },
  // Discover the Art of Prompting
  {
    id: "10",
    title: "Discover the Art of Prompting",
    issuer: "Google - Coursera",
    date: "Oct 3, 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/LMH935S3OWLN",
    imageUrl: certificate10,
  },
];
