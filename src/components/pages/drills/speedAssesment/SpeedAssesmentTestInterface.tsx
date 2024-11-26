import { useState, useEffect } from "react";
import { QuestionStatusSpeedTest, TestScreenProps } from "@/types/types";
import TopBar from "./SpeedAssesmentTestHelpBar";
import SpeedAssesmentQuestionViewPanel from "./SpeedAssesmentQuestionViewPanel";
import SpeedAssesmentTestView from "./SpeedAssesmentTestView";

const SpeedAssesmentTestInterface = ({ questions, handleEndTest }: TestScreenProps) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [selectedQuestionId, setSelectedQuestionId] = useState(
    questions[0]?.id
  );

  const [questionStatus, setQuestionStatus] = useState(
    Object.fromEntries(
      questions.map((q) => [q.id, "notReached" as QuestionStatusSpeedTest])
    )
  );

  const [lastQuestionId, setLastQuestionId] = useState<number | null>(null);

  const handleQuestionSelect = (id: number) => {
    if (lastQuestionId && questionStatus[lastQuestionId] === "notReached") {
      setQuestionStatus((prev) => ({
        ...prev,
        [lastQuestionId]: "skipped",
      }));
    }
    setSelectedQuestionId(id);
    setLastQuestionId(id);
  };

  const handleSkip = () => {
    setQuestionStatus((prev) => ({
      ...prev,
      [selectedQuestionId]: "skipped",
    }));
    goToNextQuestion();
  };

  const handleSaveForLater = () => {
    setQuestionStatus((prev) => ({
      ...prev,
      [selectedQuestionId]: "saveForLater",
    }));
    goToNextQuestion();
  };

  const handleNext = () => {
    setQuestionStatus((prev) => ({
      ...prev,
      [selectedQuestionId]: "attempted",
    }));
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    const currentIndex = questions.findIndex(
      (q) => q.id === selectedQuestionId
    );
    const nextIndex = (currentIndex + 1) % questions.length;
    setSelectedQuestionId(questions[nextIndex].id);
    setLastQuestionId(questions[nextIndex].id);
  };

  const updateQuestionsAttempted = () => {
    const attemptedCount = Object.values(questionStatus).filter(
      (status) => status === "attempted"
    ).length;
    setQuestionsAttempted(attemptedCount);
  };

  useEffect(() => {
    updateQuestionsAttempted();
  }, [questionStatus]);

  

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft((prev) => prev - 1);
    }
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);

  }, []);

  const selectedQuestion = questions.find((q) => q.id === selectedQuestionId);

  return (
    <div className="flex gap-8 justify-between p-12 h-screen ">
      {selectedQuestion ? (
        <SpeedAssesmentTestView
          question={selectedQuestion}
          onSkip={handleSkip}
          onSaveForLater={handleSaveForLater}
          onNext={handleNext}
          timeLeft={timeLeft}
          questionsAttempted={questionsAttempted}
        />
      ) : (
        <div>Loading question...</div>
      )}
      <div className="flex flex-col gap-4 w-1/4">
        <TopBar 
        handleEndTest={handleEndTest}
        />
        <SpeedAssesmentQuestionViewPanel
          questions={questions}
          questionStatus={questionStatus}
          onQuestionSelect={handleQuestionSelect}
          selectedQuestionId={selectedQuestionId}
        />
      </div>
    </div>
  );
};

export default SpeedAssesmentTestInterface;
