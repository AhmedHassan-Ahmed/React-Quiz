import { useMemo } from "react";

export default function Answers({
  onselect,
  answers,
  selectanswers,
  cssSelect,
}) {
    
  const shuffledAnswers = useMemo(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  }, [answers]);

  return (
    <div id="answers">
      {shuffledAnswers.map((ele, index) => {
        let cssanswer = "";
        const selected = ele === selectanswers;
        if (selected && cssSelect === "selected") cssanswer = "selected";
        if (selected && cssSelect === "wrong") cssanswer = "wrong";
        if (selected && cssSelect === "correct") cssanswer = "correct";
            

        return (
          <div key={index} className="answer">
            <button
              onClick={() => onselect(ele)}
              className={cssanswer} disabled={cssSelect !== null}
            >
              {ele}
            </button>
          </div>
        );
      })}
    </div>
  );
}
