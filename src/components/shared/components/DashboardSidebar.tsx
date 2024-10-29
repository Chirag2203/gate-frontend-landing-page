import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
const DashboardSidebar = () => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {/* {children} */}
    </main>
  </SidebarProvider>
  )
}

export default DashboardSidebar
