import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { useState, type FC, type ReactElement } from "react";

export const Menutopbar: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <Menubar className="flex justify-between items-center px-6 py-4 border-none m-5">
      <h1 className="text-xl font-bold">M3k!</h1>

      <div className="flex items-center gap-6">
        <MenubarMenu>
          <MenubarTrigger onClick={() => setOpen(!open)}>
            {open ? (
              <ClearRoundedIcon fontSize="large" />
            ) : (
              <MenuRoundedIcon fontSize="large" />
            )}
          </MenubarTrigger>
        </MenubarMenu>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <ClearRoundedIcon fontSize="large" />
          </button>
          <ul className="text-white text-4xl space-y-6 text-center">
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">About Me</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">Experience</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="Home">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </Menubar>
  );
};
