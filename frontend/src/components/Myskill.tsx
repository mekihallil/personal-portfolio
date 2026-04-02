import cssIcon from "../icons/css.svg";
import htmlIcon from "../icons/html.svg";
import javascriptIcon from "../icons/javascript.svg";
import nodeIcon from "../icons/node.svg";
import reactIcon from "../icons/react.webp";
import shadCnUiIcon from "../icons/shadcnui.svg";
import tailwindCssIcon from "../icons/tailwindcss.svg";
import tanStackIcon from "../icons/tanstack.svg";
import typescriptIcon from "../icons/typescript.svg";
import viteIcon from "../icons/vite.svg";

export const Myskill = () => {
  return (
    <>
      <div className="h-full pl-22 mt-50 ">
        <div>
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold">SKILLS</p>
            <h1 className="text-6xl pt-2 text-[#780FFF] font-semibold">
              My Skills
            </h1>
            <p className="mt-4 text-[1.6rem] md:max-w-2xl font-semibold">
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
              <div className="flex gap-6 ">backend development icons</div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">DATABASE</h1>
              <div className="flex gap-6 ">database icons</div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                TOOLS & WORKFLOW
              </h1>
              <div className="flex gap-6 ">tools and workflow icons</div>
            </div>
            <div className="my-10">
              <h1 className="mb-4 text-[20px] font-semibold">
                API & AUTHENTICATION
              </h1>
              <div className="flex gap-6 ">Api and auth icons</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
