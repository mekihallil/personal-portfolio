import { motion, useScroll } from "motion/react";
import type { FC, ReactElement } from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Experience } from "../components/sections/Experience";
import { HeroTagline } from "../components/sections/HeroTagline";
import { Home } from "../components/sections/Home";
import { Project } from "../components/sections/Project";
import { Skill } from "../components/sections/Skill";

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
      <div className="dark:bg-[#070C17] dark:text-white bg-white text-[#070C17] font-['Miranda_Sans']">
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
    </>
  );
}
