import { useCallback, useRef, useState } from "react";
import questions from "../../questions";
import QuizCompleted from '../../assets/quiz-complete.png';
import QuestionTimer from "../QuestionTimer";
import Answers from "../Answers";

const Quiz = () => {
    const [answerState, setanswerState] = useState('');
    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const quizCompleted = activeQuestionIndex === questions.length;
    const handleSelectAnswer = useCallback((answer) => {
        const question = questions[activeQuestionIndex];
        const correctAnswer = question.answers[0];
        setanswerState('answered');
        setuserAnswers((prev) => [...prev, answer]);
        setTimeout(() => {
            const isCorrect = answer === correctAnswer;
            if (isCorrect) {
                console.log('correct answer');
                setanswerState('correct');
            } else {
                setanswerState('incorrect');
            }
            setTimeout(() => {
                setanswerState('');
            }, 1000);
        }, 1000);
    }, [activeQuestionIndex, questions]);

    if (quizCompleted) {
        return (
            <div id="summary">
                <img src={QuizCompleted} alt='quiyCompleted'></img>
                <h2>Quiz complete</h2>
            </div>
        );
    }


    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer time={10000} onTimeout={handleSkipAnswer} key={`${activeQuestionIndex}-question`} />
                <h2>{questions[activeQuestionIndex].text}</h2>
                <Answers key={activeQuestionIndex} answers={questions[activeQuestionIndex].answers} selectedAnswer={userAnswers[userAnswers.length - 1]} answerState={answerState} onSelect={handleSelectAnswer} />
            </div>
        </div>

    );
}
export default Quiz;