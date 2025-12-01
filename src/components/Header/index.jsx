import QuizLogo from '../../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
        <img src={QuizLogo} alt="React Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
export default Header;