import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import type { FC, ReactElement } from "react";
export const Dashboard: FC = (): ReactElement => {
  return (
    <Menubar className=" justify-end border-none ">
      <MenubarMenu>
        <MenubarTrigger className=" mt-12 mr-12 ">
          <MenuRoundedIcon fontSize="large" />
        </MenubarTrigger>
        <MenubarContent className="border-none text-3xl min-w-screen min-h-screen">
          <MenubarGroup className="justify-items-center text-center mt-20 ">
            <MenubarItem className="text-6xl">Home</MenubarItem>
            <MenubarItem className="text-6xl">About Me</MenubarItem>
            <MenubarItem className="text-6xl">Experiance</MenubarItem>
            <MenubarItem className="text-6xl">Project</MenubarItem>
            <MenubarItem className="text-6xl">Contact</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
