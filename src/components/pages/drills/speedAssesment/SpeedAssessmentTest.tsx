import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsIntro from "../DrillsIntro";
import { speedAssesmentIntroData } from "@/constants/data";
import { useState, useEffect } from "react";
import { AssessmentQuestions } from "@/constants/data";
import SpeedAssesmentTestInterface from "./SpeedAssesmentTestInterface";
import SpeedAssesmentTestReport from "./SpeedAssesmentTestReport";
import FullScreenWarning from "./FullScreenWarning";

const SpeedAssessmentTest = () => {
  const [isTestStarted, setTestStarted] = useState(0); // 0 => test not started, 1 => test ongoing, 2 => test ended
  const [showFullscreenWarning, setShowFullscreenWarning] = useState(false);
  const [timeToRedirect, setTimeToRedirect] = useState(60);
  const startTest = () => {
    setTestStarted(1);
    enterFullScreen();
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  // Exit fullscreen mode
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  //redirect to drills after 15 seconds
  const redirectToDrills = () => {
    const id = setInterval(() => {
      setTimeToRedirect((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      window.location.href = "/drills";
    }, 60000);
    return () => clearInterval(id);
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
    exitFullScreen();
    redirectToDrills();
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
            <FullScreenWarning
              handleReEnterFullscreen={handleReEnterFullscreen}
              handleEndTest={handleEndTest}
            />
          ) : (
            <SpeedAssesmentTestInterface questions = {AssessmentQuestions}
            handleEndTest={handleEndTest}/>
          )}
          {/* <SpeedAssesmentTestInterface
            questions={AssessmentQuestions}
            handleEndTest={handleEndTest}
          /> */}
        </>
      ) : (
        <SpeedAssesmentTestReport timeToRedirect={timeToRedirect} />
      )}
    </div>
  );
};

export default SpeedAssessmentTest;
