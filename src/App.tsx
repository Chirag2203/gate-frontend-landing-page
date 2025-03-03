import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Pricing, OurStory, Waitlist } from "./components/pages/landing";
import { NotFound } from "./components/shared/components";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import ScrollToTop from "./components/shared/ScrollToTop";
import Refund from "./components/pages/Refund";
import Contact from "./components/pages/Contact";
import Whatsapp from "./components/pages/whatsapp/Whatsapp";
import { HelmetProvider } from 'react-helmet-async';
const App = () => {
  return (
    <div>
      <HelmetProvider>
        <ToastContainer />
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/whatsapp" element={<Whatsapp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;
