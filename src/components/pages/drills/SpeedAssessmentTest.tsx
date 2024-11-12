import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsIntro from "./DrillsIntro";
import { speedAssesmentIntroData } from "@/constants/data";
import { useState, useEffect } from "react";
import { AssessmentQuestions } from "@/constants/data";
import TestInterface from "./TestInterface";


const SpeedAssessmentTest = () => {
  const [isTestStarted, setTestStarted] = useState(0); // 0 => test not started, 1 => test ongoing, 2 => test ended
  const [showFullscreenWarning, setShowFullscreenWarning] = useState(false);

  const startTest = () => {
    setTestStarted(1);
    enterFullScreen();
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  useEffect(() => {
    // Listen for fullscreen change events
    const handleFullscreenChange = () => {
      if (isTestStarted === 1 && !document.fullscreenElement) {
        // Show warning prompt if fullscreen is exited during the test
        setShowFullscreenWarning(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isTestStarted]);

  const handleReEnterFullscreen = () => {
    // Attempt to re-enter fullscreen mode
    setShowFullscreenWarning(false);
    enterFullScreen();
  };

  const handleEndTest = () => {
    // End the test
    setShowFullscreenWarning(false);
    setTestStarted(2);
  };

  return (
    <div>
      {isTestStarted === 0 ? (
        <DashboardWrapper>
          <DrillsIntro
            Logo={speedAssesmentIntroData.drillLogo}
            drillName={speedAssesmentIntroData.drillName}
            drillDescription={speedAssesmentIntroData.drillDescription}
            drillDetails={speedAssesmentIntroData.drillDetails}
            drillWorking={speedAssesmentIntroData.drillWorking}
            drillFeatures={speedAssesmentIntroData.drillFeatures}
            drillStart={startTest}
          />
        </DashboardWrapper>
      ) : isTestStarted === 1 ? (
        <>
          {showFullscreenWarning ? (
            <div className="fullscreen-warning-overlay">
              <p>The test requires fullscreen mode to continue.</p>
              <button onClick={handleReEnterFullscreen}>Re-enter Fullscreen</button>
              <button onClick={handleEndTest}>Exit Test</button>
            </div>
          ) : (
            <TestInterface questions = {AssessmentQuestions}/>
          )}
        </>
      ) : (
        <div>Test ended. Thank you for participating!</div>
      )}
    </div>
  );
};

export default SpeedAssessmentTest;
