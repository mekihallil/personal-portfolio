import { aboutData, aboutTextData } from "@/data/aboutData";
import type { FC, ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
export const About: FC = (): ReactElement => {
  return (
    <>
      <div id="aboutme" className="flex h-full mb-25">
        {/* paragraph about me   */}
        <div className="w-1/2 text-2xl pt-10">
          <div className="grid  h-full ">
            <div className="flex flex-col ml-22">
              <p className="text-[20px] font-semibold">ABOUT</p>
              <div className="text-7xl pt-2 text-[#780FFF] text-gradient font-semibold">
                <h1 className="text-6xl pt-2">About Me</h1>
              </div>
              <p className="mt-4 text-[1.6rem] md:w-2xl font-semibold"></p>
            </div>

            {aboutTextData.map((b) => {
              return (
                <div className="ml-22" key={b.id}>
                  <p className="pl-10 text-[18px]  ">{b.description}</p>
                </div>
              );
            })}
            {/* <h4 className="ml-3 flex  justify-center">
              I believe:- 
              <i>
                <q className="playwrite border-b-4 border-l-2 border-[#0a1c4e] dark:border-white rounded-3xl text-xl  ">
                  community is the heart of growth and development
                </q>
              </i>
            </h4> */}
          </div>
        </div>
        {/* card about me  */}
        <div className="w-1/2 grid content-center mt-20">
          <div className="grid grid-cols-2 gap-8  h-full mx-30">
            {aboutData.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.id}>
                  <Card className="h-54 bg-transparent border-white rounded-3xl ">
                    <CardHeader className="text-center">
                      <CardTitle className="h-1/3 text-6xl flex justify-center ">
                        {a.id === 4 ? (
                          <div className="text-[#780FFF] font-semibold text-7xl pt-3">
                            {a.title}
                          </div>
                        ) : (
                          <Icon
                            style={{ fontSize: 80 }}
                            sx={{ color: ["#780FFF"] }}
                          />
                        )}
                      </CardTitle>
                      <CardContent className="h-1/3 flex justify-center text-3xl">
                        <p>{a.id === 4 ? "Project" : a.title}</p>
                      </CardContent>
                      <CardDescription className="h-1/3 text-xs m-auto">
                        {a.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
