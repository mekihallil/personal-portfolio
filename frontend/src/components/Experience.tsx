export const Experience = () => {
  return (
    <>
      <div className="ml-22 mt-40">
        <p className="text-[20px] font-semibold">EXPERIENCE</p>
        <h1 className="text-7xl pt-2 text-[#780FFF] text-gradient font-semibold">
          My Experience 
        </h1>
      </div>
      <div className="flex h-300 ">
        <div className="relative w-1/2 h-300  ">
          <line className="absolute  left-20  h-full w-0.5  bg-black dark:bg-white"></line>
          <div className="absolute top-10 left-17 right-0 bottom-0 text-2xl">
            <rect className="absolute w-6.5 h-6.5 bg-amber-600  rounded-[7px] border-3 border-black  "></rect>
            <circle className="absolute w-3.5 h-3.5 rounded-full bg-black dark:bg-white  dark:border-white border-3 border-black m-1.5 "></circle>
            <div className="absolute ml-8">
              <h1>2025</h1>
              <h1>Hello</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum facere inventore cupiditate fuga quos ullam eos
                labore aspernatur sed.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 bg-emerald-800">image</div>
      </div>
    </>
  );
};
