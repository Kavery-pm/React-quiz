import QuizCompleted from '../../assets/quiz-complete.png';
import questions from '../../questions';

const Summary = ({ userAnswers }) => {
    const QUESTIONS = questions;
    const correctAnswersCount = userAnswers.filter((answer, index) => {
        const question = QUESTIONS[index];
        const correctAnswer = question.answers[0];
        return answer === correctAnswer;
    }).length;

    const skippedAnswersCount = userAnswers.filter(answer => answer === null).length;
    const incorrectAnswersCount = userAnswers.filter((answer, index) => {
        const question = QUESTIONS[index];
        const correctAnswer = question.answers[0];
        return answer !== correctAnswer && answer !== null;
    }).length;
    const totalQuestions = QUESTIONS.length;
    const correctPercentage = ((correctAnswersCount / totalQuestions) * 100).toFixed(0);
    const skippedPercentage = ((skippedAnswersCount / totalQuestions) * 100).toFixed(0);
    const incorrectPercentage = (100 - correctPercentage - skippedPercentage).toFixed(0);




    return (
        <div id="summary">

            <div id="summary">
                <img src={QuizCompleted} alt='quizCompleted'></img>
                <h2>Quiz complete</h2>
                <div id='summary-stats'>
                    <p>
                        <span className='text'>Skipped</span>
                        <span className='number'>{skippedPercentage}%</span>

                        <span className='text'>{skippedAnswersCount}</span>
                    </p>
                    <p>
                        <span className='text'>Correct</span>
                        <span className='number'>{correctPercentage}%</span>
                        <span className='text'>{correctAnswersCount}</span>
                    </p>
                    <p>
                        <span className='text'>Incorrect</span>
                        <span className='number'>{incorrectPercentage}%</span>
                        <span className='text'>{incorrectAnswersCount}</span>
                    </p>



                </div>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    const question = QUESTIONS[index];
                    let cssClasses = 'user-answer ';
                    if (answer === null) {
                        cssClasses += 'skipped';
                    } else {
                        const correctAnswer = question.answers[0];
                        if (answer === correctAnswer) {
                            cssClasses += 'correct';
                        } else {
                            cssClasses += 'wrong';
                        }
                    }

                    return (

                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{question.text}</p>
                            <p className={cssClasses}>{answer ?? 'skipped'}</p>
                        </li>


                    )
                })}
            </ol>
        </div>
    );
}
export default Summary;