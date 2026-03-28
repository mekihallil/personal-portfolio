import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import type { FC, ReactElement } from "react";
export const Dashboard: FC = (): ReactElement => {
  return (
    <Menubar className="display-flex justify-end border-none ">
      <MenubarMenu>
        <MenubarTrigger className="mt-12 mr-12 ">
          <MenuRoundedIcon fontSize="large" />
        </MenubarTrigger>
        <MenubarContent className="dispaly-flex justify-items-center border-none text-3xl min-w-screen min-h-screen">
          <MenubarGroup>
            <MenubarItem>Home</MenubarItem>
            <MenubarItem>About Me</MenubarItem>
            <MenubarItem>Experiance</MenubarItem>
            <MenubarItem>Project</MenubarItem>
            <MenubarItem>Contact</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Download CV</MenubarItem>
          </MenubarGroup>

          <MenubarGroup></MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
