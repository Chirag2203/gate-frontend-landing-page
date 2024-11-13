import {
    BookOpen,
    Frame,
    GalleryVerticalEnd,
    ListCheck,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react";
// Sample data
export const navdata = {
    user: {
      name: "Chirag Rajput",
      email: "m@example.com",
      avatar: "https://avatar.iran.liara.run/public/22",
    },
    teams: {
      name: "MentaraAi",
      logo: GalleryVerticalEnd,
      plan: "Free Plan",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: "Overview", url: "#" },
          { title: "Activity", url: "#" },
          { title: "Performance", url: "#" },
        ],
      },
      {
        title: "Tasks",
        url: "#",
        icon: ListCheck,
        items: [
          { title: "Genesis", url: "#" },
          { title: "Explorer", url: "#" },
          { title: "Quantum", url: "#" },
        ],
      },
      {
        title: "Lessons",
        url: "#",
        icon: BookOpen,
        items: [{ title: "History", url: "#" }],
      },
      {
        title: "Drills",
        url: "/drills",
        icon: PieChart,
        items: [
          { title: "Speed Assessment", url: "/drills/speed-assessment" },
          { title: "Answer Elimination", url: "/drills/answer-elimination" },
          { title: "Accuracy vs Speed", url: "/drills/accuracy-vs-speed" },
          { title: "Time-Bound Sets", url: "/drills/time-bound-sets" },
          {
            title: "Calculator Efficiency",
            url: "/drills/calculator-efficiency",
          },
        ],
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings2,
        items: [
          { title: "General", url: "/settings/general" },
          { title: "Billing", url: "/settings/billing" },
        ],
      },
    ],
    projects: [
      { name: "Design Engineering", url: "#", icon: Frame },
      { name: "Sales & Marketing", url: "#", icon: PieChart },
      { name: "Travel", url: "#", icon: Map },
    ],
  };
  