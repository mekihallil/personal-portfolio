import { experinace } from "@/data/experianceData";
import type { FC, ReactElement } from "react";

export const Experience: FC = (): ReactElement => {
  return (
    <>
      <section id="experience" className="flex flex-col mt-30 max-lg:pl-3">
        <div className=" mx-22 max-lg:mx-3  max-lg:w-auto">
          <p className="text-[20px] font-semibold">WORK</p>
          <h1 className="text-7xl pt-2 text-[#780FFF] text-gradient font-medium  max-lg:text-5xl">
            EXPERIENCE
          </h1>
          <p className="text-3xl mb-6 pt-5  max-lg:flex  max-lg:flex-wrap"></p>
        </div>
        <div className="flex mx-22 my-15 max-lg:ml-3">
          <div className="w-1/2 h-full  max-lg:w-lvw">
            {experinace.map((e) => {
              const Icon = e.icon;
              return (
                <div className="-mt-14 max-lg:w-full" key={e.id}>
                  <section className="flex  max-lg:w-85 ">
                    <div className="relative">
                      <div className="absolute right-1/2 bg-gray-400 border-2 h-100 w-0.5"></div>
                    </div>
                    <div className="relative h-50 bg-blue-400">
                      <div className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></div>
                      <div className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></div>
                    </div>
                    <div className="relative top-50 h-50 bg-blue-400">
                      <div className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></div>
                      <div className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></div>
                    </div>
                    <div className="relative top-100 h-50 bg-blue-400">
                      <div className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></div>
                      <div className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></div>
                    </div>
                  </section>
                  <section className="h-64 w-100  max-lg:w-min">
                    <section>
                      <div className="relative -top-50 pl-5  max-lg:w-85 ">
                        <h1 className=" pl-3 max-lg:pl-3 ">{e.finalDate}</h1>
                      </div>
                      <div className="relative -top-50 pl-5  max-lg:w-85 ">
                        <h1 className="text-4xl font-semibold">{e.date}</h1>
                      </div>
                    </section>
                    <section>
                      <div className="relative -top-22 pl-5 max-lg:w-70">
                        <h1 className="">
                          <Icon style={{ fontSize: 50 }} />
                        </h1>
                        <p className="text-2xl font-semibold pl-5 mb-4 max-lg:flex max-lg:w-80 max-lg:mb-2">
                          {e.title}
                        </p>
                        <h1 className="text-xl w-100 font-normal max-lg:w-80">
                          {e.description}
                        </h1>
                      </div>
                    </section>
                  </section>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 grid justify-center max-lg:hidden">image</div>
        </div>
      </section>
    </>
  );
};
