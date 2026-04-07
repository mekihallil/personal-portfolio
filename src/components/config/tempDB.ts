import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import PersonIcon from "@mui/icons-material/Person";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

// *********************About me data***********************************//
type aboutData = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};
type aboutTextData = {
  id: number;
  description: string;
};
export const aboutData: aboutData[] = [
  {
    id: 1,
    title: "Featured Problem Solving Project",
    description: "Click to access this problem-solving project",
    icon: EngineeringRoundedIcon,
  },
  {
    id: 2,
    title: "Education",
    description:
      "BSc, Computer Science  Nov 2024 -Ongoing - St. Mary University",
    icon: SchoolRoundedIcon,
  },
  {
    id: 3,
    title: "Experience",
    description:
      "1 year of experience building and learning programming skills",
    icon: HomeRepairServiceRoundedIcon,
  },
  {
    id: 4,
    title: "10+",
    description: "Projects Projects Projects Projects Projects ",
    icon: PersonIcon,
  },
];
export const aboutTextData: aboutTextData[] = [
  {
    id: 1,
    description:
      "I am a disciplined and motivated aspiring full-stack developer focused on building modern, scalable web applications. I work with technologies like TypeScript, React, Node.js, Express, and MongoDB, aiming to write clean, efficient, and maintainable code. I enjoy solving real-world problems and turning ideas intouser-friendly digital products.",
  },
  {
    id: 2,
    description:
      "I believe consistent practice and continuous learning are key to growth in technology. I improve my skills by building projects, exploring new tools, and strengthening both frontend and backend development. My goal is to become a professional developer who contributes to impactful projects and succeeds in global tech opportunities.",
  },
];

// *********************project data***********************************//
type projectType = {
  id: number;
  title: string;
  status: string;
};
export const projectCard: projectType[] = [
  {
    id: 1,
    title: "Coming Soon",
    status: "..............",
  },
  {
    id: 2,
    title: "Coming Soon",
    status: "..............",
  },
  {
    id: 3,
    title: "Coming Soon",
    status: "..............",
  },
  {
    id: 4,
    title: "Coming Soon",
    status: "..............",
  },
  {
    id: 5,
    title: "Coming Soon",
    status: "..............",
  },
  {
    id: 6,
    title: "Coming Soon",
    status: "..............",
  },
];

// *********************experiance data***********************************//
type experiance = {
  id: number;
  date: number;
  title: string;
  icon: React.ElementType;
  description: string;
};

export const experinace: experiance[] = [
  {
    id: 1,
    date: 2025,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 2,
    date: 2024,
    title: "Frontend develper",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Frontend develper",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Frontend develper",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Frontend develper",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
  {
    id: 3,
    date: 2023,
    title: "Junior Full Stack Developer",
    icon: PersonIcon,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum facere inventore cupiditate fuga quos ullam eos labore aspernatur sed.",
  },
];
