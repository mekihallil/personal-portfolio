import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import PersonIcon from "@mui/icons-material/Person";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

// About me DB
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
    description: "Experience",
    icon: EngineeringRoundedIcon,
  },
  {
    id: 2,
    title: "Education",
    description: "Clients Clients Clients Clients Clients Clients Clients",
    icon: SchoolRoundedIcon,
  },
  {
    id: 3,
    title: "Experience",
    description: "Experience",
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
