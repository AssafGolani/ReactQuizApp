import { useRef } from "react";
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffeledAnswers = useRef();

  if (!shuffeledAnswers.current) {
    shuffeledAnswers.current = [...answers];
    shuffeledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffeledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses === answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
