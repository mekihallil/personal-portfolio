import type { FC, ReactElement } from "react";

export const Contact: FC = (): ReactElement => {
  return (
    <>
      <div className="grid place-items-center mt-20">
        <div className="flex flex-col  justify-center">
          <h1 className="text-7xl  ">Contact</h1>
          <h1 className="text-2xl text-center mt-3">Get in touch.</h1>
        </div>
        <form className="w-full max-w-2xl">
          <div>
            <div className="grid grid-cols-1 ">
              <label htmlFor="fieldgroup-name">Name</label>
              <input
                className="h-15 border-2 border-[#780FFF]  focus:border-[#780FFF]  outline-none  rounded-xl text-2xl mt-2 p-5"
                id="fieldgroup-name"
              />
            </div>
            <div className="grid grid-cols-1 mt-7">
              <label htmlFor="fieldgroup-email">Email</label>
              <input
                id="fieldgroup-email"
                type="email"
                className="h-15 border-2 border-[#780FFF]  focus:border-[#780FFF]  outline-none  rounded-xl text-2xl mt-2 p-3"
              />
            </div>
            <div className="grid grid-cols-1 mt-7">
              <label htmlFor="fieldgroup-email">Message</label>
              <textarea
                id="fieldgroup-email"
                className="h-40 border-2 border-[#780FFF]  focus:border-[#780FFF]  outline-none  rounded-xl text-2xl mt-2 p-3"
              />
            </div>
            <div className="flex justify-center mt-10">
              <button className=" border-2 border-[#780FFF] bg-transparent px-7 py-3 rounded-sm hover:bg-[#780FFF] active:text-white dark:active:text-[#070C17] animation-duration-initial font-semibold ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
