import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export const Introsection = () => {
  return (
    <>
      <div className="h-130">
        <div className="flex gap-6 mx-14 my-28">
          {/* introduction */}
          <div className="text w-3/5 h-auto  ">
            <div className="text-5xl">Hello</div>
            <div className="text-7xl py-7">I am Meki Hallil</div>
            <div className="text-3xl ">
              I build systems that don't build systems that don't build{" "}
            </div>
            <div className="flex gap-4 py-7">
              <a href="" className="email">
                <MailOutlineRoundedIcon />
              </a>
              <a href="" className="email">
                in
              </a>
              <a href="" className="email">
                Github
              </a>
            </div>
            <div className="flex gap-5 ">
              <button className="border-2 border-black  w-38 h-13  rounded-[10px]">
                Let's Talk
              </button>
              <button className="border-2 border-black w-38 h-13  rounded-[10px]">
                Download CV
              </button>
            </div>
          </div>
          {/* animation  */}
          <div className="w-2/5 bg-blue-700 ">image</div>
        </div>
      </div>
    </>
  );
};
