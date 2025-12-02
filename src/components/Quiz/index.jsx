import { useCallback, useState } from "react";
import questions from "../../questions";
import QuizCompleted from '../../assets/quiz-complete.png';
import QuestionTimer from "../QuestionTimer";

const Quiz = () => {


    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizCompleted = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback((answer) => {
        setuserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
    }, [])
    if (quizCompleted) {
        return (
            <div id="summary">
                <img src={QuizCompleted} alt='quiyCompleted'></img>
                <h2>Quiz complete</h2>
            </div>
        );
    }
    const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    const sortedAnswers = shuffledAnswers.sort(() => Math.random() - 0.5);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    return (
        <div id='quiz'>


            <div id='question'>
                <QuestionTimer time={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex}/>
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {sortedAnswers.map((answer) => {
                        return (
                            <li key={answer} className="answer"><button onClick={() => { handleSelectAnswer(answer) }}>{answer}</button></li>
                        )
                    })}
                </ul>
            </div>
        </div>

    );
}
export default Quiz;