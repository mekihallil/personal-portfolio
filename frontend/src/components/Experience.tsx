import { experinace } from "./config/tempDB";

export const Experience = () => {
  return (
    <>
      <section className="grid mt-30">
        <div className=" mx-22 ">
          <p className="text-[20px] font-semibold">WORK</p>
          <h1 className="text-7xl pt-2 text-[#780FFF] text-gradient font-medium">
            EXPERIENCE
          </h1>
          <p className="text-3xl mb-6 pt-5 w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptatum facere inventore
          </p>
        </div>
        <div className="flex mx-22 my-15">
          <div className="w-1/2 h-full">
            {experinace.map((e) => {
              const Icon = e.icon;
              return (
                <div className="-mt-14">
                  <section className="flex ">
                    <div className="relative">
                      <line className="absolute right-1/2 bg-gray-400 border-2 h-100 w-0.5"></line>
                    </div>
                    <div className="relative h-50 bg-blue-400">
                      <rect className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></rect>
                      <circle className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></circle>
                    </div>
                    <div className="relative top-50 h-50 bg-blue-400">
                      <rect className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></rect>
                      <circle className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></circle>
                    </div>
                    <div className="relative top-100 h-50 bg-blue-400">
                      <rect className="absolute rotate-45 -left-3  w-5.5 h-5.5 border-2 border-none bg-[#1d2f5a]"></rect>
                      <circle className="absolute -left-2 top-1 w-3.5 h-3.5 border-2 border-gray-400 rounded-full"></circle>
                    </div>
                  </section>
                  <section>
                    <div className="relative -top-50 pl-5 ">
                      <h1 className="text-6xl font-semibold">{e.date}</h1>
                    </div>
                  </section>
                  <section>
                    <div className="relative -top-15 pl-5 ">
                      <h1 className="text-2xl">
                        <Icon style={{fontSize:50}}/>
                      </h1>
                      <p className="text-2xl font-semibold px-5">{e.title}</p>
                      <h1 className="text-xl w-100 font-normal">
                        {e.description}
                      </h1>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 grid justify-center">image</div>
        </div>
      </section>
    </>
  );
};
