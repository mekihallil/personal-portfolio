import { aboutData, aboutTextData } from "@/tempDB";
import PersonIcon from "@mui/icons-material/Person";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
export const Aboutme = () => {
  return (
    <>
      <div className="flex h-full mb-25">
        {/* paragraph about me   */}
        <div className="w-1/2 text-2xl pt-10">
          <div className="grid  h-full ">
            <div className="flex justify-center gap-8 ">
              <PersonIcon sx={{ fontSize: 70 }} />
              <h1 className="text-6xl pt-2">About Me</h1>
            </div>
            {aboutTextData.map((b) => {
              return (
                <div className="" key={b.id}>
                  <p className="pl-10 text-[19px] text-center ">
                    {b.description}
                  </p>
                </div>
              );
            })}
            <h4 className="ml-3 flex  justify-center">
              <i>
                <q className="playwrite border-b-4 border-l-2 border-[#0a1c4e] dark:border-white rounded-3xl text-xl  ">
                  Community is the heart of growth and development.
                </q>
              </i>
            </h4>
          </div>
        </div>
        {/* card about me  */}
        <div className="w-1/2 grid content-center mt-20">
          <div className="grid grid-cols-2 gap-8  h-full mx-30">
            {aboutData.map((a) => {
              const Icon = a.icon;
              return (
                <div>
                  <Card className="h-54 bg-transparent border-white rounded-3xl " key={a.id}>
                    <CardHeader>
                      <CardTitle className=" h-1/3 text-6xl  flex justify-center ">
                        {a.id === 4 ? (
                          a.title
                        ) : (
                          <Icon style={{ fontSize: 80 }} />
                        )}
                      </CardTitle>
                      <CardContent className="h-1/3 flex justify-center text-3xl">
                        <p>
                          {a.id === 4 ? (
                            "Project"
                          ) : a.id === 1 ? (
                            <div className="text-xl">{a.title}</div>
                          ) : (
                            a.title
                          )}
                        </p>
                      </CardContent>
                      <CardDescription className="h-1/3 text-1xl">
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
