import PersonIcon from "@mui/icons-material/Person";

type experiance = {
  id: number;
  finalDate?: string;
  date: number;
  title: string;
  icon: React.ElementType;
  description: string;
};

export const experinace: experiance[] = [
  {
    id: 1,
    finalDate: "Present",
    date: 2025,
    title: "MERN stack Development",
    icon: PersonIcon,
    description:
      "Learning and Building type-safe MERN apps with TypeScript & Tailwind while constantly learning",
  },
];
