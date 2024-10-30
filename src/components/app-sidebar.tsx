import * as React from "react"
import {
  BookOpen,
  Frame,
  GalleryVerticalEnd,
  ListCheck,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Chirag Rajput",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    
      name: "MentaraAi",
      logo: GalleryVerticalEnd,
      plan: "Free Plan",
    },
  
  navMain: [
    {
      title: "Dashbaord",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Activity",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Self Assessment",
      url: "/self-assessment",
      icon: ListCheck,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Flashcards",
      url: "/flashcards",
      icon: BookOpen,
      
    },
    {
      title: "Drills",
      url: "/drills",
      icon: PieChart,
      items: [
        {
          title: "Speed Assesment",
          url: "/drills/speed-assesment-test",
        },
        {
          title: "Answer Elimination",
          url: "/drills/answer-elimination",
        },
        {
          title: "Accuracy vs Speed",
          url: "/drills/accuracy-vs-speed",
        },
        {
          title: "Time-Bound Sets",
          url: "/drills/time-bound-sets",
        },
        {
          title: "Calculator Efficiency",
          url: "/drills/calculator-efficiency",
        },
        
      ],
    },
    {
      title:"Guided Learning",
      url: "/guided-learning",
      icon: Map,
      
    },
    {
      title:"Find a mentor",
      url: "/find-a-mentor",
      icon: User2,
      
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
