import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/components/layout/Footer";
import { HeroTagline } from "@/sections/HeroTagline";
import { Home } from "@/sections/Home";
import { Navbar } from "@/components/layout/Navbar";
import { Skill } from "@/sections/Skill";
import { Project } from "@/sections/Project";
import { motion, useScroll } from "motion/react";
import type { FC, ReactElement } from "react";

export const Dashboard: FC = (): ReactElement => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 left-0 right-0 h-2 bg-[#780FFF] origin z-10"
      />
      <Components />
    </>
  );
};
function Components() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-20  dark:bg-[#070C17] dark:text-white bg-white text-[#070C17] font-['Miranda_Sans']">
          <Navbar />
          <Home />
          <About />
          <Skill />
          <Project />
          <HeroTagline />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
