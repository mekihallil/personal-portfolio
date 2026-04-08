import { projectCard } from "@/components/config/tempDB";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { FC, ReactElement } from "react";

export interface Artwork {
  artist: string;
  art: string;
}

export const Project: FC = (): ReactElement => {
  return (
    <>
      <div className="h-svh mt-30">
        <div className="ml-22 mb-10">
          <p className="text-[20px] font-semibold">PROJECTS</p>
          <h1 className="text-6xl pt-2 text-[#780FFF] text-gradient font-semibold">
            My Projects
          </h1>
          <p className="mt-4 text-[1.6rem] w-xl font-semibold">
            I have production-level experience in crafting aesthetic user
            experiences
          </p>
        </div>
        <div className="">
          <ScrollArea className="w-full h-130 m rounded-md border-none whitespace-nowrap ">
            <div className=" flex  w-full  space-x-4 overflow-x-auto scroll-smooth  mx-22 gap-10 ">
              {projectCard.map((c) => {
                return (
                  <figure className="shrink-0 w-180 h-110 bg-transparent border-4 rounded-4xl">
                    <figcaption className="relative grid place-content-center h-full text-5xl t-2   text-muted-foreground">
                      {c.title}
                      <span className="flex align-bottom font-semibold text-foreground "></span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </>
  );
};
