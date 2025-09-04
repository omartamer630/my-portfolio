export const projects = [
  {
    id: 1,
    category: "DevOps",
    title: "Deploying a Secure Django App on AWS ECS Using Terraform and GitHub Actions",
    description: `A production-ready deployment pipeline for a Django application on AWS ECS using Fargate. The infrastructure is fully managed with Terraform, while CI/CD is automated with GitHub Actions. The project showcases best practices in containerization, Infrastructure as Code, and secure cloud deployment. It includes an Application Load Balancer for traffic distribution, an Amazon RDS PostgreSQL database for persistence, and a scalable ECS Fargate service for running the application.`,
    stack: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "VPC Endpoints" },
      { name: "ECS" },
      { name: "Load Balancer" },
      { name: "Terraform" },
      { name: "Github Action" },
    ],
    mainImage: "https://i.postimg.cc/pL9L2Tbk/Architecture.png",
    album: [],

    github: "https://github.com/omartamer630/deploy-django-application-cicd",
    status: "completed",
  },
  {
    id: 2,
    category: "Cloud Engineer",
    title: "Serverless App",
    description: `Developed a fully serverless web application on AWS with a focus on scalability, security, and cost efficiency. The backend was powered by AWS Lambda functions, integrated with API Gateway for endpoint management, and DynamoDB for persistent data storage. The frontend was hosted on Amazon S3 and delivered globally through CloudFront for low latency. Route 53 and AWS Certificate Manager (ACM) were configured to provide secure DNS routing and SSL/TLS certificates, ensuring reliable and secure access to the application.`,
    stack: [
      {
        name: "AWS",
      },
      { name: "Bash" },
      { name: "AWS Console" },
      { name: "Lambda Function" },
      { name: "Api Gateway" },
      { name: "DynamoDB" },
      { name: "Route53" },
      { name: "GoDaddy" },
    ],
    mainImage: "https://i.postimg.cc/9MPnZGTb/Automation.gif",
    album: [],
    github: "https://github.com/omartamer630/serverless-app",
    status: "completed",
  },
];
