import {
  FaJsSquare,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCss3Alt,
  FaLock,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiPostman,
  SiGraphql,
  SiJest,
  SiPm2,
  SiPrisma,
  SiSequelize,
  SiTypeorm,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const about = {
  title: "About Me",
  description: ` I'm a passionate Full Stack Developer with a decent background in web development. I have a proven track record of delivering high-quality, scalable, and efficient web applications. My expertise lies in building robust and responsive user interfaces using React, Next.js, and TypeScript. I always focus on building a well-structured codebase while striving to avoid redundancy, ensuring maintainability and scalability.`,
  info: [
    {
      name: "Name",
      value: "Ali Hassan",
    },
    {
      name: "Phone",
      value: "(+20) 100 062 7666",
    },
    {
      name: "Experince",
      value: "1 Year",
    },
    {
      name: "Nationality",
      value: "Egyptian",
    },

    {
      name: "Email",
      value: "alghost2004@gmail.com",
    },
    { name: "Freelance", value: "Availabile" },
    { name: "Language", value: "English, Arabic" },
  ],
};

export const experince = {
  icons: "/assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      company: "Syntax Error",
      position: "Full Stack Developer",
      duration: "2024 - 2025",
      description:
        "Developed a full-stack web application using Next.js, Prisma, Redux, and JWT for authentication. Built a dynamic landing page, a course management system, an admin dashboard for course creation, and an interactive quiz system similar to Porsline. Utilized DaisyUI with Tailwind CSS for a clean and responsive UI.",
    },
    {
      company: "CodeClause",
      position: "Web Developer Intern",
      duration: "Summer 2024",
      description:
        "Developed three responsive web applications, implementing backend functionality using Node.js, Express.js, and MongoDB. Integrated SQLite for lightweight data storage and utilized FilePond for efficient file uploads. Focused on creating dynamic and user-friendly experiences with JavaScript.",
    },

    {
      company: "Freelance Project",
      position: "Vue Frontend Developer",
      duration: "2024 - Present",
      description:
        "Developing the frontend of an anime streaming platform, implementing features like anime browsing, search, and watchlists using Vue.js, Pinia, and Tailwind CSS for a seamless user experience.",
    },
    {
      company: "Prime Academy (Freelance)",
      position: "React Frontend Developer",
      duration: "Jan 2025 - Present",
      description:
        "Developing the frontend of an anime streaming platform, implementing features like anime browsing, search, and watchlists using Vue.js, Pinia, and Tailwind CSS for a seamless user experience.",
    },
  ],
};

export const education = {
  title: "Education",
  items: [
    {
      institution: "Egyptian E-Learning University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2022 - 2026",
      course: null,
    },
    {
      institution: "Cisco Networking Academy",
      course: "CCNA: Switching, Routing, and Wireless Essentials",
      duration: "2025",
      gpa: null,
      degree: null,
    },
    {
      institution: "Cisco Networking Academy",
      course: "CCNA: Introduction to Networks",
      duration: "2024",
      gpa: null,
      degree: null,
    },
    {
      institution: "Udemy",
      course: "Node.js,Express.js ,PostgreSQL, and Security [ARABIC]",
      level: "Beginner-Intermediate",
      instructor: "Mohamed Naga",
      duration: "2025",
    },
    {
      institution: "Udemy",
      course:
        "Node.js: Internals, REST & GraphQL APIs, Performance, and Cloud Deployment",
      level: "Advanced",
      instructor: "Andrei Neagoie, Adam Odziemkowski",
      duration: "2025",
    },
    {
      institution: "Udemy",
      course:
        "Mastering Advanced Node.js: Event Loop, Redis Caching, File Uploads with AWS S3, and CI/CD Testing",
      level: "Advanced",
      instructor: "Stephen Grider",
      duration: "2025",
    },
  ],
};

export const categorizedSkills = {
  frontend: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaVuejs />, name: "Vue" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiReactquery />, name: "React Query" },
  ],
  backend: [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <FaLock />, name: "JWT" },
    { icon: <SiPm2 />, name: "PM2" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiTypeorm />, name: "TypeORM" },
    { icon: <SiSequelize />, name: "Sequelize" },
  ],
  database: [
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
  ],
  tools: [{ icon: <SiPostman />, name: "Postman" }],
  testing: [{ icon: <SiJest />, name: "Jest" }],
};
