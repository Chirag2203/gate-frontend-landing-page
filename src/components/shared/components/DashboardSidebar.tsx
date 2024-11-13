import { AppSidebar } from "@/components/app-sidebar";
const DashboardSidebar = ({
  toggleSidebar,
  isOpen,
}:  {
  toggleSidebar: () => void;
  isOpen: boolean;
}) => {
  return <AppSidebar
    isOpen={isOpen}
    toggleSidebarMain={toggleSidebar}
  
  />;
};

export default DashboardSidebar;
