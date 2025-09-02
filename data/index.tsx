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
      "Designing and running secure, scalable, and cost-efficient cloud systems on AWS and GCP. Experienced in building well-structured architectures, automating infrastructure with Terraform, and managing containerized applications. Skilled at creating multi-environment setups with strong networking and security practices, while keeping deployments reliable and easy to maintain. Focus is always on balancing performance, security, and cost to deliver practical, future-proof solutions.",
  },
  {
    title: "DevOps Engineer",
    number: "02",
    description:
      "Design and implementation of scalable, secure, and automated DevOps workflows. Expertise includes building CI/CD pipelines with GitHub Actions and Jenkins, automating tasks with Bash and Python, and managing containerized environments using Docker. Infrastructure as Code is applied through Terraform to create reproducible, consistent environments, while version control best practices and automated testing ensure reliability and efficiency. Focus is placed on cost efficiency, security, and streamlined deployment processes.",
  },
];

export const socials = [
  { icon: <FaGithub />, path: "https://github.com/omartamer630" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/omar-tamer03/",
  },
];
