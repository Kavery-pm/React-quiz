import { useCallback, useRef, useState } from "react";
import questions from "../../questions";
import QuizCompleted from '../../assets/quiz-complete.png';
import QuestionTimer from "../QuestionTimer";
import { use } from "react";

const Quiz = () => {
    const shuffledAnswer = useRef();
    const [answerState, setanswerState] = useState('');
    const [userAnswers, setuserAnswers] = useState([]);
    const activeQuestionIndex = answerState === ''? userAnswers.length: userAnswers.length - 1;

    const quizCompleted = activeQuestionIndex === questions.length;

   // Fix just this function
const handleSelectAnswer = useCallback((answer) => {
  // capture stable refs BEFORE state updates
  const question = questions[activeQuestionIndex];
  const correctAnswer = question.answers[0];

  // mark as answered and record selection
  setanswerState('answered');
  setuserAnswers((prev) => [...prev, answer]);

  // evaluate after a short delay
  setTimeout(() => {
    const isCorrect = answer === correctAnswer; // compare clicked answer, not answerState
    if (isCorrect) {
      console.log('correct answer');
      setanswerState('correct');
    } else {
      setanswerState('incorrect');
    }

    // advance after brief pause
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
    if(!shuffledAnswer.current){
        shuffledAnswer.current = [...questions[activeQuestionIndex].answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }
    // const shuffledAnswers = [...questions[activeQuestionIndex].answers];
    // const sortedAnswers = shuffledAnswers.sort(() => Math.random() - 0.5);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    return (
        <div id='quiz'>


            <div id='question'>
                <QuestionTimer time={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex}/>
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswer.current.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length-1] === answer;
                        console.log(isSelected);
                        let cssClasses = '';
                        if(answerState === 'answered' && isSelected){
                            cssClasses = 'selected';
                            console.log('answer selected');
                        }else if(answerState === 'correct' && isSelected){
                            cssClasses = 'correct';
                            console.log('correct answer selected');
                        }else if(answerState === 'incorrect' && isSelected){
                            cssClasses = 'wrong';
                            console.log('wrong answer selected');
                        }
                        
                        return (
                            <li key={answer} className="answer"><button className={cssClasses} onClick={() => { handleSelectAnswer(answer) }}>{answer}</button></li>
                        )
                    })}
                </ul>
            </div>
        </div>

    );
}
export default Quiz;