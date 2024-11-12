import MainPanel from "./subComponents/MainPanel";
import QuestionPanel from "./subComponents/QuestionPanel";
import { useState } from "react";
import { QuestionStatusSpeedTest, TestScreenProps } from "@/types/types";

const TestInterface = ({ questions }: TestScreenProps) => {
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

  const selectedQuestion = questions.find((q) => q.id === selectedQuestionId);

  return (
    <div>
      {selectedQuestion ? (
        <MainPanel question={selectedQuestion} onSkip={handleSkip} onSaveForLater={handleSaveForLater} onNext={handleNext} />
      ) : (
        <div>Loading question...</div>
      )}
      <QuestionPanel
        questions={questions}
        questionStatus={questionStatus}
        onQuestionSelect={handleQuestionSelect}
        selectedQuestionId={selectedQuestionId}
      />
    </div>
  );
};

export default TestInterface;
