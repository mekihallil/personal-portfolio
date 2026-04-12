import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type social = {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
};

export const Social: social[] = [
  {
    id: 1,
    title: "email",
    url: "mailto:mekigk37@gmail.com",
    icon: EmailRoundedIcon,
  },
  {
    id: 2,
    title: "linkdeIn",
    url: "https://www.linkedin.com/in/meki-hallil/",
    icon: LinkedInIcon,
  },
  {
    id: 3,
    title: "github",
    url: "https://github.com/mekihallil",
    icon: GitHubIcon,
  },
  {
    id: 4,
    title: "telegram",
    url: "https://t.me/meki_hallil",
    icon: SendRoundedIcon,
  },
];
