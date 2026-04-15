import helloeIcon from "@/assets/icons/hello.webp";
import { Social } from "@/data/social";
import { motion } from "motion/react";
import type { FC, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import bollImage from "../assets/image/boll.svg";
import pcImage from "../assets/image/pc.svg";
import spinImage from "../assets/image/spin.png";

export const Home: FC = (): ReactElement => {
  return (
    <>
      <div id="home" className="h-130 ">
        <div className="flex gap-6 mx-22 max-lg:ml-2  ">
          {/* introduction */}
          <div className="text w-3/5 h-auto my-35 max-lg:my-25 max-lg:w-full">
            <div className="flex text-5xl text-[#780FFF] font-semibold ">
              <h1>Hello</h1>
              <img className="ml-4 w-12" src={helloeIcon} alt="" />
            </div>
            <div className="font-semibold py-3 ">
              <h1 className="text-6xl font-bold max-lg:text-[44px] max-lg:">
                I am
                <span className=" mx-7 -pt-2 max-lg:m-0 max-lg:p-2">Meki</span>
                Hallil
              </h1>
            </div>
            <div >
              <TypeAnimation
                sequence={[
                  "Junior Full-Stack Developer",
                  3000,
                  "Backend-Focused Engineer",
                  3000,
                  "Building Scalable and Maintainable Systems",
                  3000,
                  "Designing Secure and Efficient APIs",
                  3000,
                  "Focused on Clean Architecture and Best Practices",
                  3000,
                  "Turning Ideas into Functional Products",
                  3000,
                  "Continuously Learning and Improving",
                  3000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-3xl underline decoration-[#780FFF] max-lg:text-xl "
              />
            </div>
            <div className="flex ">
              {Social.map((s) => {
                return (
                  <div className="flex py-7 w-15" key={s.id}>
                    <a
                      href={s.url}
                      className="hover:text-[#780FFF] "
                      target="_blank"
                    >
                      <s.icon fontSize="large" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-5 ">
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                className="border-2 border-[#780FFF]  w-38 h-13 hover:bg-[#780FFF] hover:text-white rounded-[10px]"
              >
                <a href="#contact">Let's Talk</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                className="border-2 border-[#780FFF] w-38 h-13 hover:bg-[#780FFF] hover:text-white rounded-[10px]"
              >
                Download CV
              </motion.button>
            </div>
          </div>
          {/* animation  */}
          <div className=" w-2/5 h-100  pt-30 pl-10 ">
            <div className="max-lg:hidden">
              <div className="w-90 ">
                <img src={spinImage} alt="" />
              </div>
              <div className=" w-20 h-20 animate-bounce -mt-110  pb-25  ">
                <img src={bollImage} alt="" />
              </div>
              <div className="w-90 ml-6 ">
                <img src={pcImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
