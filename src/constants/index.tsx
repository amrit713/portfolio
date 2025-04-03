import {
  FaCss3,
  FaDiscord,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaRust,
  FaYarn,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMongodb, SiNpm, SiPnpm, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

export const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/work",
    label: "My work",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const aboutContents = `I have been coding for over 5 years, beginning my journey in 2020. Initially, I learned HTML, CSS, and JavaScript to build websites.\nMy first project was a simple website built with HTML, CSS, and JavaScript (~mid-2020).\nAs I progressed, I focused heavily on React.js and Next.js. Now, I specialize in building SaaS applications with modern web technologies.`;

export const projects = [
  {
    title: "CaseMandu",
    label:
      "Casemandu is your go-to destination for stylish and protective phone cases. Designed with both aesthetics and durability in mind, this online store offers a wide range of cases that match your personality while keeping your device safe. Whether you're into sleek minimalism or bold designs, Casemandu has something for everyone. With easy online ordering and smooth delivery, upgrading your phone’s look has never been this effortless!",
    websiteUrl: "https://casemandu-one.vercel.app/",
    coverImage: "/img/casemandu.png",
    technologies: [
      { title: "React", icon: FaReact },
      { title: "Nextjs", icon: RiNextjsFill },
      { title: "Tailwindcss", icon: RiTailwindCssFill },
      { title: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Jotion",
    label:
      "Note-Taking is a simple, no-fuss online tool designed to help you jot down ideas, organize thoughts, and keep track of important notes. Whether you're brainstorming, planning, or just saving quick reminders, this minimalistic and easy-to-use platform makes note-taking effortless. No distractions—just you and your notes, anytime, anywhere!",
    websiteUrl: "https://note-taking-nine.vercel.app/",
    coverImage: "/img/jotion.png",
    technologies: [
      { title: "React", icon: FaReact },
      { title: "Nextjs", icon: RiNextjsFill },
      { title: "Tailwindcss", icon: RiTailwindCssFill },
      { title: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "PingPanda",
    label:
      "PingPanda is a lightweight and efficient API testing tool designed for developers who need quick and reliable endpoint validation. With a clean interface and seamless functionality, it helps you send requests, check responses, and debug APIs effortlessly. Whether you're building, testing, or monitoring, PingPanda makes API interactions smooth and hassle-free! 🚀",
    websiteUrl: "https://pingpanda-api.netlify.app/",
    coverImage: "/img/ping-panda.png",
    technologies: [
      { title: "React", icon: FaReact },
      { title: "Nextjs", icon: RiNextjsFill },
      { title: "Tailwindcss", icon: RiTailwindCssFill },
      { title: "Prisma", icon: SiPrisma },
    ],
  },
];

export const technologies = [
  {
    title: "HTML",
    icon: <FaHtml5 className="size-5 text-red-500" />,
  },
  {
    title: "Css",
    icon: <FaCss3 className="size-5 text-sky-400" />,
  },
  {
    title: "Javascript",
    icon: <FaJs className="size-5 text-yellow-500 " />,
  },
  {
    title: "Typescript",
    icon: <BiLogoTypescript className="size-5 text-blue-500 " />,
  },
  {
    title: "Nodejs",
    icon: <FaNodeJs className="size-5 text-green-500 " />,
  },
  { title: "React", icon: <FaReact className="size-5 text-blue-400" /> },
  { title: "Nextjs", icon: <RiNextjsFill className="size-5" /> },
  {
    title: "Postgresql",
    icon: <BiLogoPostgresql className="size-5 text-purple-300 " />,
  },
  {
    title: "Mongodb",
    icon: <SiMongodb className="size-5 text-green-600 " />,
  },
  {
    title: "Tailwindcss",
    icon: <RiTailwindCssFill className="size-5 text-sky-400" />,
  },
  { title: "Figma", icon: <FaFigma className="size-5 " /> },
  { title: "Prisma", icon: <SiPrisma className="size-5" /> },
  {
    title: "Git",
    icon: <FaGitAlt className="size-5 text-red-600 " />,
  },
  {
    title: "Github",
    icon: <FaGithub className="size-5 " />,
  },
  {
    title: "Pnpm",
    icon: <SiPnpm className="size-5 " />,
  },
  {
    title: "Npm",
    icon: <SiNpm className="size-5 text-red-500 " />,
  },
  {
    title: "Yarn",
    icon: <FaYarn className="size-5 text-blue-400 " />,
  },
  {
    title: "Vercel",
    icon: <RiVercelFill className="size-5  " />,
  },
  {
    title: "Rust",
    icon: <FaRust className="size-5 text-orange-500 " />,
  },
];

export const contacts = [
  {
    title: "Email",
    href: "#",
    icon: <MdAlternateEmail className="size-5" />,
  },
  {
    title: "Discord",
    href: "#",
    icon: <FaDiscord className="size-5 text-indigo-500" />,
  },
  {
    title: "Github",
    href: "https://github.com/amrit713",
    icon: <FaGithub className="size-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/amrit-ghimire-b2488a199/",
    icon: <FaLinkedin className="size-5 text-blue-400" />,
  },
];
