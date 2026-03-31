import reactIcon from "../icons/react.webp";

export const Myskill = () => {
  return (
    <>
      <div className="h-svh  bg-emerald-800 pl-22 ">
        <div>
          <div className="">
            <h5>SKILLS</h5>
            <h1 className="text-6xl pt-2">My Skills</h1>
            <p className="mt-4 text-3xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing <br />
              elit. Libero, cum delectus magnam laudantium inventore unde <br />
              voluptatum magni sequi voluptas tempora deserunt
            </p>
          </div>
          {/* skills with icon */}
          <div className="mt-10">
            <div>
              <h1 className="pb-3.5 text-[20px] font-semibold">
                DESCRIPTION ABOUT SKILL
              </h1>
              <img className="w-12 gap-6" src={reactIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
