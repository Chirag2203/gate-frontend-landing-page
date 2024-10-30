import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <div className="pt-8 p-4 w-full group-has-[[data-collapsible=icon]]/sidebar-wrapper:p-4 flex items-start justify-start">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardWrapper;
