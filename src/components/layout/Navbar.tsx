import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import { motion } from "motion/react";
import { useEffect, useState, type FC, type ReactElement } from "react";

export const Navbar: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <Menubar className="border border-none  dark:text-white ">
      <div className="flex justify-between  pl-22 pr-18 py-6 fixed top-0 right-0 left-0 mask-b-from-sky-100 dark:text-white bg-[#e4e2e2] mask-b-from-10% dark:bg-[#0a1c4e] max-lg:p-4 max-lg:w-screen">
        <h1 className="text-xl font-bold">
          <a href="#home">M3k!</a>
        </h1>
        <div className="flex ">
          <div className="flex ml-5 gap-2">
            <MenubarMenu>
              <MenubarTrigger onClick={() => setMode(!mode)}>
                {mode ? (
                  <LightModeRoundedIcon
                    sx={{ fontSize: 30 }}
                    fontSize="medium"
                  />
                ) : (
                  <NightsStayRoundedIcon
                    sx={{ fontSize: 30 }}
                    fontSize="medium"
                  />
                )}
              </MenubarTrigger>

              <MenubarTrigger onClick={() => setOpen(!open)}>
                {open ? (
                  <ClearRoundedIcon sx={{ fontSize: 40 }} />
                ) : (
                  <MenuRoundedIcon sx={{ fontSize: 40 }} />
                )}
              </MenubarTrigger>
            </MenubarMenu>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50 max-lg:w-lvw max-lg:h-lvh">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <motion.div whileTap={{ rotate: 180 }}>
              <ClearRoundedIcon
                className="mx-13 my-1 max-lg:m-0 "
                sx={{ fontSize: 40 }}
              />
            </motion.div>
          </button>
          <ul className="text-white text-6xl space-y-6 text-center">
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#aboutme" onClick={() => setOpen(false)}>
                About Me
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#experience" onClick={() => setOpen(false)}>
                Experience
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#project" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </Menubar>
  );
};
