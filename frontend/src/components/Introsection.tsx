import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export const Introsection = () => {
  return (
    <>
      <div className="h-130 font-['Miranda_Sans']">
        <div className="flex gap-6 mx-22 my-35">
          {/* introduction */}
          <div className="text w-3/5 h-auto  ">
            <div className="text-5xl">Hello</div>
            <div className="font-semibold text-7xl py-3">
              <h1 className="text-6xl font-bold text-white">
                I am
                <span className="relative mx-7 shadow-lg">Meki</span>
                Hallil
              </h1>
            </div>
            <div className="text-3xl ">
              I build systems that don't build systems that don't
            </div>
            <div className="flex gap-4 py-7 w-25 ">
              <a href="" className="">
                <MailOutlineRoundedIcon />
              </a>
              <a href="" className="">
                in
              </a>
              <a href="" className="">
                <img className="bg-white  rounded-3xl" src="" alt="" />
              </a>
            </div>
            <div className="flex gap-5 ">
              <button className="border-2 border-[#780FFF]  w-38 h-13  rounded-[10px]">
                Let's Talk
              </button>
              <button className="border-2 border-[#780FFF] w-38 h-13  rounded-[10px]">
                Download CV
              </button>
            </div>
          </div>
          {/* animation  */}
          <div className=" w-2/5 bg-blue-700 ">image</div>
        </div>
      </div>
    </>
  );
};
