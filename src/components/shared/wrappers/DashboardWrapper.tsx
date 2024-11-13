import React, { useEffect, useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    // Manage the sidebar open/close state here in the parent component
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(
      localStorage.getItem("isSidebarOpen") !== "false"
    );
  
    // Update localStorage whenever the sidebar state changes
    useEffect(() => {
      localStorage.setItem("isSidebarOpen", isSideBarOpen.toString());
    }, [isSideBarOpen]);
  
    // Toggle function to pass to child components
    const toggleSidebar = () => {
      setIsSideBarOpen((prev) => !prev);
    };
  return (
    <SidebarProvider open={isSideBarOpen}>
      <DashboardSidebar  toggleSidebar={toggleSidebar} isOpen={isSideBarOpen}/>
      <SidebarInset>
        {/* <button onClick={toggleSidebar} className="toggle-sidebar-button">
          Toggle Sidebar
        </button> */}
        <div className="pt-8 p-4 w-full group-has-[[data-collapsible=icon]]/sidebar-wrapper:p-4 flex items-start justify-start">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardWrapper;
