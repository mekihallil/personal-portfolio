
import PersonIcon from "@mui/icons-material/Person";

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
];
