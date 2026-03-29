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
      <div className="flex h-160  ">
        {/* paragraph about me   */}
        <div className="w-1/2 text-2xl pt-20">
          <div className="grid  h-full ">
            <div className="flex justify-center gap-8 ">
              <PersonIcon sx={{ fontSize: 70 }} />
              <h1 className="text-6xl pt-2">About Me</h1>
            </div>
            <p className="pl-10 text-xl ">
              I am a disciplined and motivated aspiring full-stack developer
              focused on building modern, scalable web applications. I work with
              technologies like TypeScript, React, Node.js, Express, and
              MongoDB, aiming to write clean, efficient, and maintainable code.
              I enjoy solving real-world problems and turning ideas into
              user-friendly digital products.
            </p>
            <p className="px-10 text-xl ">
              I believe consistent practice and continuous learning are key to
              growth in technology. I improve my skills by building projects,
              exploring new tools, and strengthening both frontend and backend
              development. My goal is to become a professional developer who
              contributes to impactful projects and succeeds in global tech
              opportunities.
            </p>
            <h4 className="ml-3 flex  justify-center">
              <i>
                <q className="border-b-2 border-l-2 rounded-3xl ">
                  Community is the heart of growth and development.
                </q>
              </i>
            </h4>
          </div>
        </div>
        {/* card about me  */}
        <div className="w-1/2 grid content-center">
          <div className="grid grid-cols-2 gap-4 h-full mx-20">
            {/* Experiance  */}
            <div className="grid place-content-center h-54 bg-amber-400">
              Experiance Comming soon
            </div>
            <div className="grid place-content-center h-54 bg-amber-400">
              Education
            </div>
            {/* Project  */}
            <div className=" h-54 bg-amber-400">
              <Card className="h-54 bg-amber-400">
                <CardHeader>
                  <CardTitle className="flex justify-center text-6xl">
                    10+
                  </CardTitle>
                  <CardContent className="flex justify-center text-2xl">
                    <p>Projects</p>
                  </CardContent>
                  <CardDescription className=" text-1xl">
                    Card Description Card Description Card Description Card
                    Description
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="h-54 bg-amber-400">the best solving Project </div>
          </div>
        </div>
      </div>
    </>
  );
};
