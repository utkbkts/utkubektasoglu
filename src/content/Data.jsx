import {
  github,
  linkedin,
  tr,
  usa,
  WebTecnologies,
  FrontEndTecnologies,
  backendTechnologiesImage,
  nosqlImage,
  sqlImages,
  cloudinary,
  redis,
  kubernetes,
  docker,
} from "./ImageData";

const data = WebTecnologies.map((item) => item);
const frontend = FrontEndTecnologies.map((item) => item);
const backend = backendTechnologiesImage.map((item) => item);
const nosql = nosqlImage.map((item) => item);
const sqlImage = sqlImages.map((item) => item);

export const skillsData = [
  {
    id: 1,
    category: "Web Technologies & languages",
    title: "technologies",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    id: 2,
    category: "Front-End Technologies",
    title: "frontEnd",
    skills: [{ name: "React" }, { name: "Next.js" }],
  },
  {
    id: 3,
    category: "Backend Technologies",
    title: "backend",
    skills: [{ name: "Node.js" }],
  },
  {
    id: 4,
    category: "Databases - NoSQL",
    title: "databasesNoSQL",

    skills: [{ name: "MongoDB" }, { name: "Firebase" }],
  },
  {
    id: 5,
    category: "Databases - SQL",
    title: "databasesSQL",

    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }],
  },
  {
    id: 6,
    category: "Cloud and Storage",
    title: "cloudStorage",

    skills: [{ name: "Cloudinary" }, { name: "Redis" }],
  },
  {
    id: 7,
    category: "Containerization and Orchestration",
    title: "containerization",
    skills: [{ name: "Docker" }, { name: "Kubernetes" }],
  },
];
export const skillsDetail = [
  {
    id: 1,
    title: "HTML",
    img: data[0],
    progress: "100%",
  },
  {
    id: 2,
    title: "CSS",
    img: data[1],
    progress: "100%",
  },
  {
    id: 3,
    title: "JavaScript",
    img: data[2],
    progress: "90%",
  },
  {
    id: 4,
    title: "TypeScript",
    img: data[3],
    progress: "90%",
  },
];
export const frontendDetail = [
  {
    id: 1,
    title: "react",
    img: frontend[0],
    progress: "100%",
  },
  {
    id: 2,
    title: "nextjs",
    img: frontend[1],
    progress: "100%",
  },
];
export const backendDetail = [
  {
    id: 1,
    title: "nodejs",
    img: backend[0],
    progress: "100%",
  },
];
export const noSQL = [
  {
    id: 1,
    title: "mongodb",
    img: nosql[0],
    progress: "100%",
  },
  {
    id: 2,
    title: "firebase",
    img: nosql[1],
    progress: "100%",
  },
];
export const SqlDetail = [
  {
    id: 1,
    title: "postgresql",
    img: sqlImage[0],
    progress: "100%",
  },
  {
    id: 2,
    title: "mysql",
    img: sqlImage[1],
    progress: "100%",
  },
];
export const StorageDetail = [
  {
    id: 1,
    title: "cloudinary",
    img: cloudinary,
    progress: "100%",
  },
  {
    id: 2,
    title: "redis",
    img: redis,
    progress: "100%",
  },
];
export const OrchestrationDetail = [
  {
    id: 1,
    title: "docker",
    img: docker,
    progress: "100%",
  },
  {
    id: 2,
    title: "kubernetes",
    img: kubernetes,
    progress: "100%",
  },
];

export const AccountDetail = [
  {
    id: 1,
    url: "https://github.com/utkbkts",
    img: github,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/utku-bektasoglu/",
    img: linkedin,
  },
];
export const flags = [
  {
    id: 1,
    lang: "tr",
    flag: tr,
  },
  {
    id: 2,
    lang: "en",
    flag: usa,
  },
];
