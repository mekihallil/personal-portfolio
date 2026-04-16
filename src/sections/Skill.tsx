import * as motion from "motion/react-client";
import type { FC, ReactElement } from "react";
import { MySkill } from "../data/skillData";

export const Skill: FC = (): ReactElement => {
  return (
    <>
      <div className="h-full mx-22 max-lg:m-0 ">
        <div className="max-lg:w-full">
          <div className="flex flex-col ">
            <p className="text-[20px] font-semibold">SKILLS</p>
            <h1 className="text-6xl pt-2 text-[#780FFF] text-gradient font-semibold">
              My Skills
            </h1>
            <p className="mt-4 text-[1.6rem] font-semibold">
              I have production-level experience in crafting aesthetic user
              experiences with modern frontend architecture, knowing when to use
              the right tools.
            </p>
          </div>
          {/* skills with icon */}
          <div className="mt-10">
            {MySkill.map((m) => {
              const icon = m.icon;
              return (
                <div className="my-10" key={m.id}>
                  <h1 className="mb-4 text-[20px] font-semibold">{m.title}</h1>
                  <div
                    className="flex gap-6 border-none max-lg:flex max-lg:flex-wrap"
                    key={m.id}
                  >
                    {icon.map((i) => {
                      return (
                        <motion.img
                          key={i}
                          whileHover={{ scale: 2.5 }}
                          transition={{
                            type: "spring",
                            stiffness: 1300,
                            damping: 25,
                          }}
                          className="w-12 "
                          src={i}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
