import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarRail,
} from "@/components/ui/sidebar";
import {TbArrowRampRight3 } from "react-icons/tb";
import { navdata } from "@/constants/navbar";

export function AppSidebar({
  toggleSidebarMain,
  isOpen,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  toggleSidebarMain: () => void;
  isOpen: boolean;
}) {
  // State to manage sidebar open/close
  const [isSideBarOpen, setIsSideBarOpen] = React.useState<boolean>(
    localStorage.getItem("isSidebarOpen") !== "false" 
  );

  // Sync with localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem("isSidebarOpen", isSideBarOpen.toString());
  }, [isSideBarOpen]);

  // Toggle function for opening/closing sidebar

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navdata.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navdata.navMain} />
      </SidebarContent>
      <SidebarFooter>
            {/* Toggle button to open/close sidebar */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                toggleSidebarMain();
                setIsSideBarOpen(!isSideBarOpen);
              }}
              className="toggle-button"
            >
              {isSideBarOpen ? <>
                <TbArrowRampRight3 /> Close sidebar</>: <TbArrowRampRight3 />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavUser user={navdata.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
