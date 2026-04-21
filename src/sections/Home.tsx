import helloeIcon from "@/assets/icons/hello.webp";
import { Social } from "@/data/social";
import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import bollImageLight from "../assets/image/boll-dark.svg";
import bollImageDark from "../assets/image/boll.svg";
import pcImageLight from "../assets/image/pc-dark.svg";
import pcImageDark from "../assets/image/pc.svg";

export const Home: FC = (): ReactElement => {
  return (
    <>
      <div className=" ">
        <div id="home" className=" flex gap-6 mx-22 max-lg:ml-2  ">
          {/* introduction */}
          <div className="text w-3/5 h-auto  mt-50 mb-30 max-lg:w-full">
            <div className="">
              <div className="flex w-full text-[#780FFF] font-semibold ">
                <h1 className="text-6xl">Hello</h1>
                <motion.img
                  initial={{ scale: 3, rotate: 300 }}
                  animate={{ scale: [3, 3, 1], rotate: [0, 40, 0, 40, 0] }}
                  transition={{
                    duration: 1.1,
                    ease: [1, 2, 2, 1],
                    times: [0.2, 0.8, 1.5],
                  }}
                  className="ml-5 w-15 -rotate-3"
                  src={helloeIcon}
                  alt=""
                />
              </div>
              <div className="font-semibold py-5 ">
                <h1 className=" flex flex-wrap text-7xl font-bold  max-lg:text-[52px] ">
                  I am
                  <span className=" mx-7 max-lg:mx-0 max-lg:px-2">Meki</span>
                  <span>Hallil</span>
                </h1>
              </div>
            </div>
            <div className="font-['Inconsolata']">
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
                speed={60}
                repeat={Infinity}
                className="text-3xl font-normal max-lg:text-2xl "
              />
            </div>
            <div className="flex ">
              {Social.map((s) => {
                return (
                  <div className="flex py-5 w-15" key={s.id}>
                    <a
                      href={s.url}
                      className="hover:text-[#780FFF] "
                      target="_blank"
                    >
                      <s.icon fontSize="medium" />
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
          <div className=" w-2/5 h-100 pt-50 pl-10 max-lg:hidden">
            <div className="">
              {/* <div className="w-10 animate-out">
                <img src={spinImage} alt="" />
              </div> */}
              <div className=" w-20 h-20 animate-bounce -mt-10  pb-25  ">
                <img
                  className="dark:hidden inline"
                  src={bollImageLight}
                  alt=""
                />
                <img
                  className="hidden dark:inline"
                  src={bollImageDark}
                  alt=""
                />
              </div>
              <div className="w-85 ml-6 ">
                <img className="dark:hidden inline" src={pcImageLight} alt="" />
                <img className="hidden dark:inline" src={pcImageDark} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
