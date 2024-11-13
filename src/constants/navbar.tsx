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
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: false,
      items: [
        { title: "Overview", url: "#" },
        { title: "Activity", url: "#" },
        { title: "Performance", url: "#" },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: ListCheck,
      isActive:false,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Guided Learning",
      url: "/guided-learning",
      icon: BookOpen,
      isActive:false,
      items: [{ title: "History", url: "#" }],
    },
    {
      title: "Drills",
      url: "/drills",
      icon: PieChart,
      isActive:false,
      items: [
        { title: "Speed Assessment", url: "/drills/speed-assessment-test" },
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
      isActive:false,
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
