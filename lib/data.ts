import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hugging_face from "@/public/hugging_face.png";
import exter_random from "@/public/exter_random.png";
import smart_bus from "@/public/smart_bus.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end verifiction intern @ Maven Silicon",
    location: "Bengaluru, KA",
    description:
      "I worked as a front-end verification intern for 3 months. I learned about SystemVerilog, UVM and VLSI design.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer @ Exter ",
    location: "Bengaluru, KA",
    description:
      "I worked as a front-end developer for 1 year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },

] as const;

export const projectsData = [
  {
    title: "Admin Application",
    description:
    "I served as a full-stack developer for a startup project over the span of one year. Throughout this endeavor, I contributed to the development and implementation of a comprehensive system enabling the efficient management of assets and liabilities for the company.",
    tags: ["React", "Next.js", "AWS", "Tailwind", "Prisma", "Shadcn"],
    imageUrl: exter_random,
  },
  {
    title: "Hate Speech Detection using Transformers",
    description:
    "This project emerged as the culmination of my mini-project during my graduation, where I skillfully integrated the principles of Transformers and utilized a dataset sourced from Kaggle. It stands as a testament to my proficiency and serves as a valuable addition to my portfolio.",
    tags: ["Python", "LLM", "Tensorflow", ],
    imageUrl: hugging_face,
  },
  {
    title: "Smart Bus-Ticketing System",
    description:
      "A public web app for buying tickets online. It is Tech-enabling the city transportation.",
    tags: ["PHP", "MongoDB", "SQL",],
    imageUrl: smart_bus,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Java",
  "Spring",
] as const;
