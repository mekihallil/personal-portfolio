import helloeIcon from "@/components/assets/icons/hello.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import type { FC, ReactElement } from "react";
import bollImage from "./assets/image/boll.svg";
import pcImage from "./assets/image/pc.svg";

export const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="h-130 mb-40">
        <div className="flex gap-6 mx-22 ">
          {/* introduction */}
          <div className="text w-3/5 h-auto my-40 ">
            <div className="flex text-5xl text-[#780FFF] font-semibold">
              <h1>Hello</h1>
              <img className="ml-4 w-12" src={helloeIcon} alt="" />
            </div>
            <div className="font-semibold text-7xl py-3">
              <h1 className="text-6xl font-bold">
                I am
                <span className=" mx-7 ">Meki</span>
                Hallil
              </h1>
            </div>
            <div className="text-3xl ">
              I build systems that don't build systems that don't
            </div>
            <div className="flex gap-4 py-7 w-25 ">
              <a href="#" target="_blank" className="">
                <MailOutlineRoundedIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/meki-hallil/"
                target="_blank"
                className=""
              >
                <LinkedInIcon />
              </a>

              <a href="https://github.com/mekihallil" target="_blank">
                <GitHubIcon />
              </a>
              {/* <a
                href="https://t.me/meki_hallil"
                target="_blank"
                className="-rotate-45"
              >
                <SendRoundedIcon />
              </a> */}
            </div>
            <div className="flex gap-5 ">
              <button className="border-2 border-[#780FFF]  w-38 h-13  rounded-[10px]">
                Let's Talk
              </button>
              <button className="border-2 border-[#780FFF] w-38 h-13  rounded-[10px]">
                Download CV
              </button>
            </div>
          </div>
          {/* animation  */}
          <div className=" w-2/5 h-100  ">
            <div className="">
              <div className=" w-20 h-20 animate-[wiggle_1s_ease-in-out_infinite] mt-20 mb-20 ">
                <img src={bollImage} alt="" />
              </div>
            </div>
            <div className="w-80 ml-30 my-auto ">
              <img src={pcImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
