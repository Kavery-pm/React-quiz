import QuizCompleted from '../../assets/quiz-complete.png';
import questions from '../../questions';

const Summary = ({ userAnswers }) => {
    const QUESTIONS = questions;

    return (
        <div id="summary">

            <div id="summary">
                <img src={QuizCompleted} alt='quizCompleted'></img>
                <h2>Quiz complete</h2>
                <div id='summary-stats'>
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>skipped</span>
                    </p>
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>answered Correct</span>
                    </p>
                    <p>
                        <span className='number'>10%</span>
                        <span className='text'>answered Incorrect</span>
                    </p>



                </div>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    const question = QUESTIONS[index];
                    const correctAnswer = question.answers[0];
                    return (

                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{question.text}</p>
                            <p className='user-answer'>{answer}</p>
                        </li>


                    )
                })}
            </ol>
        </div>
    );
}
export default Summary;