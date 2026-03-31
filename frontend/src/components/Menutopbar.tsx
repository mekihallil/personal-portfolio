import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState, type FC, type ReactElement } from "react";
export const Menutopbar: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <Menubar className="border border-none  ">
      <div className="flex justify-between px-15 py-10 fixed top-0 right-0 left-0 mask-b-from-sky-100  bg-amber-600">
        <h1 className="text-xl font-bold">M3k!</h1>
        <div className="flex ">
          <div className="flex ml-5 gap-6">
            <MenubarMenu>
              <MenubarTrigger onClick={() => setOpen(!open)}>
                {open ? (
                  <ClearRoundedIcon className=" " fontSize="large" />
                ) : (
                  <MenuRoundedIcon className="" fontSize="large" />
                )}
              </MenubarTrigger>
            </MenubarMenu>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <ClearRoundedIcon className="mx-11 my-4" fontSize="large" />
          </button>
          <ul className="text-white text-6xl space-y-6 text-center">
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#">About Me</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#">Experience</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </Menubar>
  );
};
