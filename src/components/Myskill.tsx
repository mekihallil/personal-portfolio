import axiosIcon from "../icons/axios.svg";
import cssIcon from "../icons/css.svg";
import expressIcon from "../icons/express.jpeg";
import gitIcon from "../icons/git.svg";
import githubIcon from "../icons/GitHub.svg";
import htmlIcon from "../icons/html.svg";
import javascriptIcon from "../icons/javascript.svg";
import jwtIcon from "../icons/jwt.svg";
import mongodbIcon from "../icons/mongodb.svg";
import mongooseIcon from "../icons/mongoose.svg";
import nodeIcon from "../icons/node.svg";
import postmanIcon from "../icons/postman.jpeg";
import reactIcon from "../icons/react.webp";
import restapiIcon from "../icons/restapi.png";
import shadCnUiIcon from "../icons/shadcnui.svg";
import tailwindCssIcon from "../icons/tailwindcss.svg";
import tanStackIcon from "../icons/tanstack.svg";
import typescriptIcon from "../icons/typescript.svg";
import viteIcon from "../icons/vite.svg";
import vscodeIcon from "../icons/vscode.svg";

export const Myskill = () => {
  return (
    <>
      <div className="h-full mx-22 mt-70 ">
        <div>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold">SKILLS</p>
            <h1 className="text-6xl pt-2 text-[#780FFF] text-gradient font-semibold">
              My Skills
            </h1>
            <p className="mt-4 text-[1.6rem] md:w-2xl font-semibold">
              I have production-level experience in crafting aesthetic user
              experiences with modern frontend architecture, knowing when to use
              the right tools.
            </p>
          </div>
          {/* skills with icon */}
          <div className="mt-10">
            <div className="">
              <h1 className="mb-4 text-[20px] font-semibold">
                CORE TECHNOLOGIES
              </h1>
              <div className="flex gap-6 ">
                <img className="w-12" src={htmlIcon} alt="" />
                <img className="w-12" src={cssIcon} alt="" />
                <img className="w-12" src={javascriptIcon} alt="" />
                <img className="w-12" src={typescriptIcon} alt="" />
                <img className="w-12" src={reactIcon} alt="" />
                <img className="w-12" src={nodeIcon} alt="" />
              </div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                FRONTEND DEVELOPMENT
              </h1>
              <div className="flex gap-6 ">
                <img className="w-12 " src={reactIcon} alt="" />
                <img className="w-12 " src={viteIcon} alt="" />
                <img className="w-12 " src={tailwindCssIcon} alt="" />
                <img
                  className="w-12 border-2 rounded-xl border-[#070C17] dark:border-white dark:bg-white "
                  src={shadCnUiIcon}
                  alt=""
                />
                <img className="w-12 " src={tanStackIcon} alt="" />
              </div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                BACKEND DEVELOPMENT
              </h1>
              <div className="flex gap-6 ">
                <img className="w-12 " src={nodeIcon} alt="" />
                <img className="w-12 rounded-xl " src={expressIcon} alt="" />
                <img className="w-12 " src={mongodbIcon} alt="" />
                <img className="w-12 " src={mongooseIcon} alt="" />
                <img className="w-12 " src={jwtIcon} alt="" />
              </div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">DATABASE</h1>
              <div className="flex gap-6 ">
                <img className="w-12 " src={mongodbIcon} alt="" />
              </div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                TOOLS & WORKFLOW
              </h1>
              <div className="flex gap-6 ">
                <img className="w-12 " src={gitIcon} alt="" />
                <img className="w-12 rounded-[100%] " src={githubIcon} alt="" />
                <img className="w-12 rounded-xl" src={postmanIcon} alt="" />
                <img className="w-12 " src={vscodeIcon} alt="" />
              </div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                API & AUTHENTICATION
              </h1>
              <div className="flex gap-6 ">
                <img className="w-12 rounded-xl" src={restapiIcon} alt="" />
                <img className="w-12 " src={axiosIcon} alt="" />
                <img className="w-12 " src={jwtIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
