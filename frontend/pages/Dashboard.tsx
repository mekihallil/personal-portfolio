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
    <>
      <Menutopbar />
      <Introsection />
      <Aboutme />
      <Myskill />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};
