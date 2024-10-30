import {
    CalculatorIcon,
    Clock,
    DrillIcon,
    FilterIcon,
    NotebookIcon,
    TimerIcon,
    TrophyIcon,
  } from "lucide-react";

export const testimonialsForAuthSideBar = 
[
    {
        id: 1,
        name: "John Doe",
        title: "AIR 1 GATE CSE 2024",
        image: "https://randomuser.me/api/portraits",
        quote: "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
    },
    {
        id: 2,
        name: "Ram Doe",
        title: "AIR 1 GATE CSE 2024",
        image: "https://randomuser.me/api/portraits",
        quote: "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
    },
    {
        id: 3,
        name: "Sham Doe",
        title: "AIR 1 GATE CSE 2024",
        image: "https://randomuser.me/api/portraits",
        quote: "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
    },
];


export const drillsCardData = [
    {
      drillName: "Speed Assesment Test",
      drillLogo: NotebookIcon,
      drillLearners: 1000,
      drillDescription: "Decode question patterns, pick the right one to solve.",
      drillStats: [
        {
          statsName: "20% score boost",
          statsLogo: Clock,
        },
        {
          statsName: "Most popular drill",
          statsLogo: TrophyIcon,
        },
      ],
      drillLink: "/drills/speed-assesment-test",
    },
    {
      drillName: "Answer Elimination",
      drillLogo: FilterIcon,
      drillLearners: 1000,
      drillDescription:
        "Most GATE candidates eliminate options wrongly. Practice to gain confidence.",
      drillStats: [
        {
          statsName: "83% success rate",
          statsLogo: Clock,
        },
        {
          statsName: "Top scorrer's favorite",
          statsLogo: TrophyIcon,
        },
      ],
      drillLink: "/drills/answer-elimination",
    },
    {
      drillName: "Accuracy vs Speed",
      drillLogo: TimerIcon,
      drillLearners: 100,
      drillDescription:
        "Stop choosing between accuracy and speed. Learn to switch modes.",
      drillStats: [
        {
          statsName: "5 min time saved",
          statsLogo: Clock,
        },
        {
          statsName: "Used by AIR 1",
          statsLogo: TrophyIcon,
        },
      ],
      drillLink: "/drills/accuracy-vs-speed",
    },
    {
      drillName: "Time-Bound Sets",
      drillLogo: Clock,
      drillLearners: 100,
      drillDescription:
        "Master your exam timing. Practice quick decision making with 5-10 question sprints.",
      drillStats: [
        {
          statsName: "2x score improvement",
          statsLogo: Clock,
        },
        {
          statsName: "500+ students mastered",
          statsLogo: TrophyIcon,
        },
      ],
      drillLink: "/drills/time-bound-sets",
    },
    {
      drillName: "Calculator Efficiency",
      drillLogo: CalculatorIcon,
      drillLearners: 100,
      drillDescription:
        "Save 15 minutes per paper with optimal calculator strategies used by toppers.",
      drillStats: [
        {
          statsName: "15 min saved/paper",
          statsLogo: Clock,
        },
        {
          statsName: "95% found helpful",
          statsLogo: TrophyIcon,
        },
      ],
      drillLink: "/drills/calculator-efficiency",
    },
  ];

  export const statsData = [
    {
      statsName: "Total time spent on drills",
      statsValue: "10 hours",
      statsLogo: Clock,
    },
    {
      statsName: "Total drills completed",
      statsValue: 100,
      statsLogo: DrillIcon,
    },
    {
      statsName: "Average time per question",
      statsValue: "10 minutes",
      statsLogo: TimerIcon,
    },
    {
      statsName: "Best streak",
      statsValue: 100,
      statsLogo: TrophyIcon,
    },
  ];