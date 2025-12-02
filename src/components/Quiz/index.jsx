import { useState } from "react";
import questions from "../../questions";
import QuizCompleted from '../../assets/quiz-complete.png';

const Quiz = () => {


    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizCompleted = activeQuestionIndex === questions.length;

    const handleSelectAnswer = (answer) => {
        console.log("Selected answer:", answer);
        setuserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
    };
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

    return (
        <div id='quiz'>


            <div id='question'>
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