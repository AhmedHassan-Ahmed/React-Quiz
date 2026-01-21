import { useState, useEffect } from "react";
import ques from "../../ques";

import Progress from "./Progress";
import Answers from "./Answers";

export default function Questions({ index, onselect, onskip }) {
  const [answerState, setAnswerState] = useState({
    selectedAnswer: "",
    status: null // "", "correct", "wrong"
  });
  let timer =10000;

  


  function handleSelect(answer) {
    
    setAnswerState({
      selectedAnswer: answer,
      status: "selected"
    });
  }
 

  if (answerState.selectedAnswer!==""){
     timer =2000;}
     if(answerState.status==="selected"){
    timer =1000;
 }
  // check answer AFTER selection
  useEffect(() => {
    if (!answerState.selectedAnswer) return;

    const timer2 = setTimeout(() => {
      const isCorrect =
        answerState.selectedAnswer === ques[index].answers[0];

      setAnswerState(prev => ({
        ...prev,
        status: isCorrect ? "correct" : "wrong"
      }));

      const nextTimer = setTimeout(() => {
        onselect(answerState.selectedAnswer);
        setAnswerState({
          selectedAnswer: "",
          status: null
        });
      }, 2000);

      return () => clearTimeout(nextTimer);
    }, 1000);

    return () => clearTimeout(timer2);
  }, [answerState.selectedAnswer, index, onselect]);
  return (
    <div id="quiz">
      <Progress
        key={answerState.status+index}
        timer={timer}
        ontimeout={answerState.selectedAnswer===""? onskip:null}
        className="answered"
      />

      <div id="question">
        <h2>{ques[index].text}</h2>
      </div>

      <Answers
        key={ques[index].answers[0]}
        onselect={handleSelect}
        answers={ques[index].answers}
        selectanswers={answerState.selectedAnswer}
        cssSelect={answerState.status}
      />
    </div>
  );
}
