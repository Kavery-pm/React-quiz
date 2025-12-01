import { useState } from "react";
import questions from "../../questions";

const Quiz = () => {


    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const handleSelectAnswer = (answer) => {
        console.log("Selected answer:", answer);
        setuserAnswers([...userAnswers, answer]);
    };
    return (
        <div id='question'>
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {questions[activeQuestionIndex].answers.map((answer) => {
                    return (
                        <li key={answer}><button onClick={()=>{handleSelectAnswer(answer)}}>{answer}</button></li>
                    )
                })}
            </ul>
        </div>

    );
}
export default Quiz;