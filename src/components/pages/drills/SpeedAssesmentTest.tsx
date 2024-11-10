import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";
import DrillsIntro from "./DrillsIntro";
import { speedAssesmentIntroData } from "@/constants/data";
import { useState } from "react";
import { speedAssessmentQuestions } from "@/constants/data";
import { TestScreenProps } from "@/types/types";
import QuestionPanel from "./subComponents/QuestionPanel";
import MainPanel from "./subComponents/MainPanel";


const TestScreen: React.FC<TestScreenProps> = ({ questions }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(questions[0].id);

  const handleQuestionSelect = (id: number) => {
    setSelectedQuestionId(id);
  }

  const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

  return (
    <div>
      <QuestionPanel questions={questions} onSelect={handleQuestionSelect} />
      <MainPanel question={selectedQuestion} />
    </div>
  )
}

const SpeedAssesmentTest = () => {
  const [isTestStarted, setTestStarted] = useState(0); /* 0 => test not started, 1 => test going on, 2 => test end screen */
  const startTest = () => {
    setTestStarted(1);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    };
  }
  return (
    <div>{isTestStarted === 0 ? (
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
      <></>
    ) : <></>}</div>
  );
};

export default SpeedAssesmentTest;
