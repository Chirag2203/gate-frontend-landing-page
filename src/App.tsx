import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DrillsHome, SpeedAssessmentTest } from "./components/pages/drills";
import { TasksHome } from "./components/pages/tasks";
import { DashboardHome } from "./components/pages/dashboard";
import { Signin, Signup } from "./components/pages/auth";
import { LandingPage,Pricing, OurStory } from "./components/pages/landing";
import { NotFound } from "./components/shared/components";
import Onboarding from "./components/pages/onboarding/Onboarding";
import AnswerElimination from "./components/pages/drills/answerElimination/AnswerElimination";
import AccuracyVsSpeed from "./components/pages/drills/accuracySpeed/AccuracyVsSpeed";
import CalculatorEfficiency from "./components/pages/drills/calculatorEfficiency/CalculatorEfficiency";
import UserProfile from "./components/pages/profile/UserProfile";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/our-story" element={<OurStory/>} />

          {/* Protected */}
          <Route path="/drills" element={<DrillsHome />} />
          <Route path="/drills/speed-assesment-test" element={<SpeedAssessmentTest/>}/>
          <Route path="/drills/answer-elimination" element={<AnswerElimination/>}/>
          <Route path="/drills/accuracy-vs-speed" element={<AccuracyVsSpeed />} />
          <Route path="/drills/calculator-efficiency" element={<CalculatorEfficiency />} />

          <Route path="/profile" element={<UserProfile />} />

          <Route path="/tasks" element={<TasksHome />} />
          
          <Route path="/dashboard" element={<DashboardHome />} />

          <Route path="/onboarding" element={<Onboarding />} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
