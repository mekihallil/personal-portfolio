import type { FC, ReactElement } from "react";

export const HeroTagline: FC = (): ReactElement => {
  return (
    <>
      <div className="grid h-lvh max-lg:h-90  ">
        <p className=" mx-32 place-content-center text-center text-7xl font-semibold max-lg:mx-3 max-lg:text-5xl ">
          I pay close attention to detail and take pride in delivering precise,
          high-quality work.
        </p>
      </div>
    </>
  );
};
