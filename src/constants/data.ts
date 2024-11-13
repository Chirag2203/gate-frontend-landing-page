import {
  CalculatorIcon,
  Clock,
  DrillIcon,
  FilterIcon,
  NotebookIcon,
  NotebookPenIcon,
  Pause,
  ThumbsUp,
  TimerIcon,
  TrophyIcon,
} from "lucide-react";

export const testimonialsForAuthSideBar = [
  {
    id: 1,
    name: "John Doe",
    title: "AIR 1 GATE CSE 2024",
    image: "https://randomuser.me/api/portraits",
    quote:
      "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
  },
  {
    id: 2,
    name: "Ram Doe",
    title: "AIR 1 GATE CSE 2024",
    image: "https://randomuser.me/api/portraits",
    quote:
      "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
  },
  {
    id: 3,
    name: "Sham Doe",
    title: "AIR 1 GATE CSE 2024",
    image: "https://randomuser.me/api/portraits",
    quote:
      "I am so grateful for the support from my mentors and the entire team at GATE CSE 2024. I couldn't have done it without them!",
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

export const speedAssesmentIntroData = {
  drillLogo: NotebookIcon,
  drillName: "Speed Assesment Test",
  drillDescription: "Train your GATE instincts.",
  drillDetails: [
    {
      detailLogo: Clock,
      detailName: "5 mins",
    },
    {
      detailLogo: NotebookPenIcon,
      detailName: "10 questions",
    },
  ],
  drillWorking:
    "explain the working of the drill in detail here, how it helps in improving the speed and accuracy of the students.",
  drillFeatures: [
    {
      featureLogo: Clock,
      featureName: "Master time management",
      featureDescription:
        "Practice making quick decision on questions in a timed environment.",
    },
    {
      featureLogo: Pause,
      featureName: "Save precious exam minutes",
      featureDescription:
        "Take a timed test to simulate exam conditions and improve your speed.",
    },
    {
      featureLogo: ThumbsUp,
      featureName: "Make a smarter question choice",
      featureDescription:
        " Learn to decode question patterns and pick the right one to solve.",
    },
  ],
};

type QuestionType =
  | "singleCorrect"
  | "multiCorrect"
  | "integer"
  | "fillInTheBlanks";

interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  type: QuestionType;
}

export const AssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    type: "singleCorrect",
  },
  {
    id: 2,
    question:
      "In probability, if two events A and B are independent, then P(A ∩ B) is:",
    options: ["P(A) * P(B)", "P(A) + P(B)", "P(A) - P(B)", "P(A) / P(B)"],
    type: "singleCorrect",
  },
  {
    id: 3,
    question:
      "Which of the following is a primary key in relational database design?",
    options: [
      "Unique column identifier",
      "Non-unique column",
      "Foreign key",
      "Indexed column",
    ],
    type: "multiCorrect",
  },
  {
    id: 4,
    question:
      "In a control system, the transfer function represents the relation between:",
    options: [
      "Input and output",
      "Time and frequency",
      "Current and voltage",
      "Feedback and input",
    ],
    type: "multiCorrect",
  },
  {
    id: 5,
    question: "The Laplace transform of a unit step function is:",
    options: ["1/s", "s", "1", "s^2"],
    type: "singleCorrect",
  },
  {
    id: 6,
    question:
      "Which of the following scheduling algorithms could result in starvation?",
    options: [
      "Round Robin",
      "First Come First Serve",
      "Shortest Job Next",
      "Multilevel Queue",
    ],
    type: "singleCorrect",
  },
  {
    id: 7,
    question:
      "In C programming, which of the following is used to define a constant?",
    options: ["#include", "int", "#define", "void"],
    type: "singleCorrect",
  },
  {
    id: 8,
    question: "The Fourier series is used to analyze which type of signals?",
    options: ["Periodic", "Aperiodic", "Stochastic", "Complex"],
    type: "singleCorrect",
  },
  {
    id: 9,
    question: "In thermodynamics, entropy is a measure of:",
    options: ["Temperature", "Pressure", "Disorder", "Energy"],
    type: "singleCorrect",
  },
  {
    id: 10,
    question: "Which of the following is not a property of a linear system?",
    options: ["Homogeneity", "Superposition", "Memoryless", "Nonlinearity"],
    type: "singleCorrect",
  },
  {
    id: 11,
    question: "What is the main purpose of a Zener diode in a circuit?",
    options: [
      "Amplification",
      "Rectification",
      "Voltage regulation",
      "Signal modulation",
    ],
    type: "singleCorrect",
  },
  {
    id: 12,
    question:
      "In object-oriented programming, encapsulation is achieved using:",
    options: [
      "Classes and objects",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
    ],
    type: "singleCorrect",
  },
  {
    id: 13,
    question:
      "Which one of the following methods is used to solve linear equations?",
    options: [
      "Gaussian Elimination",
      "Euler’s Method",
      "Runge-Kutta Method",
      "Newton-Raphson Method",
    ],
    type: "singleCorrect",
  },
  {
    id: 14,
    question: "In digital electronics, the output of an XOR gate is HIGH if:",
    options: [
      "Both inputs are LOW",
      "Both inputs are HIGH",
      "The inputs are the same",
      "The inputs are different",
    ],
    type: "singleCorrect",
  },
  {
    id: 15,
    question: "The gradient of a scalar field is a:",
    options: ["Scalar", "Vector", "Tensor", "Matrix"],
    type: "singleCorrect",
  },
];

export const avatarData = [
  {
    id: 1,
    link: "https://avatar.iran.liara.run/public/22",
  },
  {
    id: 2,
    link: "https://avatar.iran.liara.run/public/32",
  },
  {
    id: 3,
    link: "https://avatar.iran.liara.run/public/17",
  },
  {
    id: 4,
    link: "https://avatar.iran.liara.run/public/36",
  },
  {
    id: 5,
    link: "https://avatar.iran.liara.run/public/38",
  },
  {
    id: 6,
    link: "https://avatar.iran.liara.run/public/98",
  },
  {
    id: 7,
    link: "https://avatar.iran.liara.run/public/93",
  },
  {
    id: 8,
    link: "https://avatar.iran.liara.run/public/60",
  },
  {
    id: 9,
    link: "https://avatar.iran.liara.run/public/64",
  },
  { id: 10, link: "https://avatar.iran.liara.run/public/37" },
  { id: 11, link: "https://avatar.iran.liara.run/public/39" },
  { id: 13, link: "https://avatar.iran.liara.run/public/42" },
  { id: 14, link: "https://avatar.iran.liara.run/public/57" },
  { id: 15, link: "https://avatar.iran.liara.run/public/76" },
  { id: 16, link: "https://avatar.iran.liara.run/public/85" },
];
export const subjects = [
  {
    id: 1,
    name: "Mathematics",
  },
  {
    id: 2,
    name: "Aptitude",
  },
  {
    id: 3,
    name: "Reasoning",
  },
  {
    id: 4,
    name: "English",
  },
  {
    id: 5,
    name: "General Knowledge",
  },
  {
    id: 6,
    name: "Computer Science",
  },
];
