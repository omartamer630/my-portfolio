import { FaGithub, FaLinkedin } from "react-icons/fa";

export const personal = {
  firstName: "Ali",
  name: "Ali Hassan",
  email: "alghost2004@gmail.com",
  phone: "+20100062766",
  nationlity: "Egyptian",
  address: "Alexandria, Egypt",
  freeLance: "Available",
  languages: ["English", "Arabic"],
  expreince: "1 Year",
  summary:
    "Self-motivated Full Stack Developer with hands-on experience in creating dynamic and responsive web applications. Proficient in front-end and back-end technologies.",
  image: "/assets/home/image.png",
  cv: "https://drive.google.com/drive/u/0/folders/1dsYyVv3Q96oMVZuxAlE07FeIG6Lwq5D5",
};

export const stats = [
  { name: "Years of Experience", value: 1 },
  { name: "Free Lancing Projects", value: 1 },
  { name: "Side Projects", value: 19 },
  { name: "Technolgies Learned", value: 8 },
  { name: "Code Commits", value: 848 },
];

export const services = [
  {
    title: "Frontend Developer",
    number: "01",
    description:
      "I specialize in building modern and responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. My focus is on creating scalable, efficient, and visually appealing user interfaces.",
  },
  {
    title: "Backend Developer",
    number: "02",
    description:
      "I have experience developing robust and scalable backend systems using Node.js, Express, and TypeScript. I work with databases like MongoDB and PostgreSQL, utilizing Prisma and Mongoose for efficient data handling.",
  },
  {
    title: "Full Stack Developer",
    number: "03",
    description:
      "With expertise in both frontend and backend development, I build end-to-end web applications using React, Next.js, Node.js, Express, and TypeScript. I focus on performance, scalability, and seamless user experiences.",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/Khemu1" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ali-hegazy-379030254/",
  },
];
