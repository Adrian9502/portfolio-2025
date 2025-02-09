import { Facebook, Mail, Github, Linkedin } from "lucide-react";

interface SocialLink {
  Icon: React.ElementType;
  link: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    Icon: Facebook,
    link: "https://www.facebook.com/profile.php?id=100082782967903",
    label: "Facebook Profile",
  },
  {
    Icon: Mail,
    link: "mailto:bontojohnadrian@gmail.com",
    label: "Send Email",
  },
  {
    Icon: Github,
    link: "https://github.com/Adrian9502",
    label: "GitHub Profile",
  },
  {
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/john-adrian-bonto-a65704283/",
    label: "LinkedIn Profile",
  },
];

export default socialLinks;
