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
} from "@/components/ui/sidebar";
import { TbArrowRampRight3 } from "react-icons/tb";
import { navdata } from "@/constants/navbar";

export function AppSidebar({
  toggleSidebarMain,
  isOpen,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  toggleSidebarMain: () => void;
  isOpen: boolean;
}) {
  // Local state to manage sidebar open/close
  const [isSideBarOpen, setIsSideBarOpen] = React.useState<boolean>(
    localStorage.getItem("isSidebarOpen") !== "false"
  );

  // State for updated navigation items
  const [navItems, setNavItems] = React.useState(navdata.navMain);

  // Sync with localStorage whenever sidebar state changes
  React.useEffect(() => {
    localStorage.setItem("isSidebarOpen", isSideBarOpen.toString());
  }, [isSideBarOpen]);

  // Update `isActive` based on the current URL
  React.useEffect(() => {
    const currentPath = window.location.pathname;

    const updatedNavItems = navItems.map((item) => {
      // Check if the current URL starts with the item's URL
      return {
        ...item,
        isActive: currentPath.startsWith(item.url),
      };
    });

    setNavItems(updatedNavItems);
    console.log("Updated nav items", updatedNavItems);
  }, [window.location.pathname]); // Re-run this effect when the URL changes

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navdata.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* Pass updated navigation items to NavMain */}
        <NavMain items={navItems} />
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
              {isSideBarOpen ? (
                <>
                  <TbArrowRampRight3 /> Close sidebar
                </>
              ) : (
                <TbArrowRampRight3 />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavUser user={navdata.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
