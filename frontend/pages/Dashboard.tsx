import { Aboutme } from "@/components/Aboutme";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footerpage";
import { Introsection } from "@/components/Introsection";
import { Menutopbar } from "@/components/Menutopbar";
import { Myskill } from "@/components/Myskill";
import { Project } from "@/components/Project";

import type { FC, ReactElement } from "react";
export const Dashboard: FC = (): ReactElement => {
  return (
    <div className="dark:bg-[#070C17] dark:text-white bg-white text-[#070C17] font-['Miranda_Sans']">
      <Menutopbar />
      <Introsection />
      <Aboutme />
      <Myskill />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};
