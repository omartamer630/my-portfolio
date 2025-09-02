import { FaGithub, FaLinkedin } from "react-icons/fa";

export const personal = {
  firstName: "Omar",
  name: "Omar Tamer",
  email: "omartamerdev@gmail.com",
  phone: "+201555215379",
  nationlity: "Egyptian",
  address: "Alexandria, Egypt",
  freeLance: "Available",
  languages: ["English", "Arabic"],
  expreince: "1 Year",
  summary: `
  Cloud/DevOps enthusiast passionate about bridging the gap 
  between development and operations to drive seamless, scalable, and efficient workflows. 
  My mission is to enhance collaboration, automate processes, 
  and deliver innovative cloud solutions that empower businesses to thrive in dynamic environments.`,
  image: "/assets/home/image.jpg",
  cv: "https://drive.google.com/drive/folders/1gKwQeoO-83Vi5IzvQuZNdhZEWyKSV6Nc?usp=sharing",
};

export const stats = [
  { name: "Years of Experience", value: 1 },
  { name: "Free Lancing Projects", value: 1 },
  { name: "Side Projects", value: 25 },
  { name: "Code Commits", value: 464 },
];

export const services = [
  {
    title: "Cloud Engineer",
    number: "01",
    description:
      "I specialize in building modern, responsive user interfaces using React, Next.js, and TypeScript. With expertise in state management (Redux, React Query) and UI frameworks (Tailwind CSS, DaisyUI), I focus on delivering intuitive, accessible experiences. I also leverage Zod for robust form validation, ensuring clean, maintainable, and high-performance code.",
  },
  {
    title: "DevOps Engineer",
    number: "02",
    description:
      "I create scalable, high-performance APIs using Node.js, Express, and TypeScript. My experience includes working with both SQL (PostgreSQL) and NoSQL (MongoDB) databases, as well as ORMs like Prisma and Sequelize. I prioritize security and efficiency, implementing authentication solutions with JWT and OAuth, and designing RESTful APIs for optimal data handling.",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/omartamer630" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/omar-tamer03/",
  },
];
