import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DrillsHome, SpeedAssesmentTest } from "./components/pages/drills";
import { TasksHome } from "./components/pages/tasks";
import { DashboardHome } from "./components/pages/dashboard";
import { Signin, Signup } from "./components/pages/auth";
import { LandingPage } from "./components/pages/landing";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<LandingPage/>} />

          {/* Protected */}
          <Route path="/drills" element={<DrillsHome />} />
          <Route path="/drills/speed-assesment-test" element={<SpeedAssesmentTest/>}/>
          <Route path="/tasks" element={<TasksHome />} />
          <Route path="/dashboard" element={<DashboardHome />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
