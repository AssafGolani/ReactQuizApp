import imgLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={imgLogo} alt="quiz logo" />
      <h1>Quiz</h1>
    </header>
  );
}
