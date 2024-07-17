// skillsData.js
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaLaravel,
  FaGitSquare,
  FaCss3,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiPhp,
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiNpm,
  SiEslint,
  SiGitlab,
  SiTypescript,
  SiDotnet,
  SiCsharp,
} from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Javascript", icon: <RiJavascriptFill /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "React JS", icon: <FaReact /> },
      { name: "Flask", icon: <SiFlask /> },
    ],
  },
  {
    category: "Front-End Stack",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "NPM", icon: <SiNpm /> },
      { name: "GIT", icon: <FaGitSquare /> },
      { name: "Eslint", icon: <SiEslint /> },
    ],
  },
  {
    category: "Software & Tools",
    items: [
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "Gitlab", icon: <SiGitlab /> },
    ],
  },
  {
    category: "Agile methodologies and coding principles",
    items: [{ name: "Gitflow" }, { name: "Clean Code" }],
  },
  {
    category: "Currently or interest in learning...",
    items: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "C Sharp", icon: <SiCsharp /> },
      { name: ".Net Framework", icon: <SiDotnet /> },
    ],
  },
];

export default skills;
