import {
  FaJsSquare,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCss3Alt,
  FaLock,
  FaAws,
  FaGithub,
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
  SiCloudflare,
  SiCloudflareworkers,
  SiDocker,
  SiGithubactions,
  SiTravisci,
  SiSqlite,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import { BiLogoTypescript } from "react-icons/bi";

export const about = {
  title: "About Me",
  description: ` A DevOps enthusiast passionate about bridging the gap between development and operations. My mission is to
enhance collaboration and streamline workflows through automation and innovative cloud solutions, Well-versed
in CI/CD practices using GitHub Actions and Jenkins, and enjoy working with containerization tools like Docker
and orchestration platforms such as Kubernetes (k8s), Hands-on experience with Git, GitHub, Python, Bash, and
AWS empowers to create efficient and scalable solutions.`,
  info: [
    {
      name: "Name",
      value: "Omar Tamer",
    },
    {
      name: "Phone",
      value: "(+20) 155 521 5379",
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
      value: "omartamerdev@gmail.com",
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
      company: "Prime Academy (Freelance)",
      position: "Fullstack Developer",
      duration: "Feb 2025 - Present",
      description:
        "Built a modern E-learning platform with video support, interactive quizzes, chat, Cloudflare R2 uploads, and a full admin dashboard.",
    },
    {
      company: "Syntax Error (Freelance)",
      position: "Full Stack Developer",
      duration: "Oct 2024 - Jan 2025",
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
      duration: "Nov 2024 - Jan 2025",
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
  devops: [
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
    { icon: <SiSqlite />, name: "SQLite" },
  ],
  tools: [
    { icon: <RiSupabaseFill />, name: "Supabase" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiCloudflareworkers />, name: "Cloudflare Workers" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiTravisci />, name: "Travis CI" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiPostman />, name: "Postman" },
  ],
  testing: [{ icon: <SiJest />, name: "Jest" }],
};
