import axiosIcon from "../assets/icons/axios.svg";
import CssIcon from "../assets/icons/css.svg";
import expressIcon from "../assets/icons/express.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/GitHub.svg";
import HtmlIcon from "../assets/icons/html.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import jwtIcon from "../assets/icons/jwt.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import mongooseIcon from "../assets/icons/mongoose.svg";
import nodeIcon from "../assets/icons/node.svg";
import postmanIcon from "../assets/icons/postman.svg";
import reactIcon from "../assets/icons/react.webp";
import restapiIcon from "../assets/icons/restapi.png";
import shadCnUiIcon from "../assets/icons/shadcnui.svg";
import tailwindCssIcon from "../assets/icons/tailwindcss.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import viteIcon from "../assets/icons/vite.svg";
import vscodeIcon from "../assets/icons/vscode.svg";

type myskill = {
  id: number;
  title: string;
  icon: string[];
};

export const MySkill: myskill[] = [
  {
    id: 441,
    title: "CORE TECHNOLOGIES",
    icon: [
      HtmlIcon,
      CssIcon,
      javascriptIcon,
      typescriptIcon,
      reactIcon,
      nodeIcon,
    ],
  },
  {
    id: 442,
    title: "FRONTEND DEVELOPMENT",
    icon: [reactIcon, viteIcon, tailwindCssIcon, shadCnUiIcon],
  },
  {
    id: 443,
    title: "BACKEND DEVELOPMENT",
    icon: [nodeIcon, expressIcon, mongodbIcon, mongooseIcon, jwtIcon],
  },
  {
    id: 444,
    title: "DATABASE",
    icon: [mongodbIcon],
  },
  {
    id: 445,
    title: "TOOLS & WORKFLOW",
    icon: [gitIcon, githubIcon, postmanIcon, vscodeIcon],
  },
  {
    id: 446,
    title: "API & AUTHENTICATION",
    icon: [restapiIcon, axiosIcon, jwtIcon],
  },
];
