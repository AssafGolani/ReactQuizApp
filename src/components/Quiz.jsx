import { useState } from "react";
import QUESTIONS from "../questions";
import quizComplete from "../assets/quiz-complete.png";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const suffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffeledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffeledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
