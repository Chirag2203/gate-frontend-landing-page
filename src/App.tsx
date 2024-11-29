import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage,Pricing, OurStory, Waitlist } from "./components/pages/landing";
import { NotFound } from "./components/shared/components";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/our-story" element={<OurStory/>} />
          <Route path="/waitlist" element={<Waitlist />} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
