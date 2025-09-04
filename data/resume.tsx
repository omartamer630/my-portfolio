import {
  FaJenkins,
  FaAws,
  FaGithub,
  FaLinux,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiCircleci,
} from "react-icons/si";

import { 
  TbBrandTerraform,
  TbBrandCpp 
} from "react-icons/tb";

import { VscTerminalBash } from "react-icons/vsc";

import { AiOutlineKubernetes } from "react-icons/ai";


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
      company: "Digital Egypt Pioneers Initiative - DEPI",
      position: "DevOps Intern",
      duration: "Jul 2025 - Dec 2025",
      description:
        "Gained hands-on experience with core DevOps practices, including containerization with Docker, CI/CD pipelines using Jenkins and GitHub Actions, infrastructure as code with Terraform, and cloud deployment on AWS. Worked on automation, monitoring with Prometheus, and collaborative projects applying real-world DevOps workflows.",
    },
    {
      company: "Freelance",
      position: "Cloud Engineer",
      duration: "Feb 2025 - Mar 2025",
      description:
        "Containerized and deployed a PHP application on AWS using Docker, implemented automated scripts for task scheduling, improving deployment consistency and reducing manual overhead.",
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
      instructor: null,
      level: "Undergraduate",   
    },
  ],
};

export const categorizedSkills = {
cloud: [
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiGooglecloud /> , name: "GCP" },
  { icon: <TbBrandTerraform />, name: "Terraform" },
  { icon: <VscTerminalBash />, name: "Bash Script" },
],
devops: [
  { icon: <FaLinux  />, name: "Linux" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <AiOutlineKubernetes />, name: "Kubernetes" },
  { icon: <FaJenkins />, name: "Jenkins" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },
  { icon: <SiCircleci  />, name: "CircleCI" },
],
language: [
  { icon: <FaPython  />, name: "Python" },
  { icon: <VscTerminalBash />, name: "Bash Script" },
  { icon: <FaJava  />, name: "Java" },
  { icon: <TbBrandCpp  />, name: "C/C++" },
],
database: [
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
  ],
tools: [
    { icon: <FaGithub />, name: "Github" },
    { icon: <SiPostman />, name: "Postman" },
  ],
};
