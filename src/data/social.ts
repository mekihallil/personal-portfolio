import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type social = {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
};

export const Social: social[] = [
  {
    id: 551,
    title: "email",
    url: "mailto:mekigk37@gmail.com",
    icon: EmailRoundedIcon,
  },
  {
    id: 552,
    title: "linkdeIn",
    url: "https://www.linkedin.com/in/meki-hallil/",
    icon: LinkedInIcon,
  },
  {
    id: 553,
    title: "github",
    url: "https://github.com/mekihallil",
    icon: GitHubIcon,
  },
  {
    id: 554,
    title: "telegram",
    url: "https://t.me/meki_hallil",
    icon: SendRoundedIcon,
  },
];
