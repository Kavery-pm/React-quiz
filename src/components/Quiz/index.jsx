import { useState } from "react";
import questions from "../../questions";

const Quiz = () => {


    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const handleSelectAnswer = (answer) => {
        console.log("Selected answer:", answer);
        setuserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
    };
    return (
        <div id='quiz'>


            <div id='question'>
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {questions[activeQuestionIndex].answers.map((answer) => {
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