import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <DashboardSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardWrapper;
