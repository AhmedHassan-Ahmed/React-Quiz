import { useState, useCallback } from "react";
import ques from "../../ques";
import Questions from "./Questions";
import Summary from "./Summary";
export default function Quiz() {
  const [answerSelect, setanswer] = useState([]);

  const index = answerSelect.length;
  const completeQuestions = ques.length === index;

  const handle = useCallback((answer) => {
    setanswer((prev) => [...prev, answer]);
  }, []);

  const handleAnswersT = useCallback(() => {
    setanswer((prev) => [...prev, null]);
  }, [handle]);

  if (completeQuestions) {
    return <Summary userAnswers={answerSelect} />;
  }

  return <Questions index={index} onselect={handle} onskip={handleAnswersT} />;
}
