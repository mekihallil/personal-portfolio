import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import PersonIcon from "@mui/icons-material/Person";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

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
    title: "Specialization",
    description:
      "Full-stack development with React and Typeacript technologies",
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
    id: 5,
    description:
      "I am a disciplined and motivated aspiring full-stack developer focused on building modern, scalable web applications. I work with technologies like TypeScript, React, Node.js, Express, and MongoDB, aiming to write clean, efficient, and maintainable code. I enjoy solving real-world problems and turning ideas intouser-friendly digital products.",
  },
  {
    id: 6,
    description:
      "I believe consistent practice and continuous learning are key to growth in technology. I improve my skills by building projects, exploring new tools, and strengthening both frontend and backend development. My goal is to become a professional developer who contributes to impactful projects and succeeds in global tech opportunities.",
  },
];
