import { useRef } from "react";

const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {

    
    const shuffledAnswer = useRef(null);
     if (!shuffledAnswer.current) {
            shuffledAnswer.current = [...answers];
            shuffledAnswer.current.sort(() => Math.random() - 0.5);
        }
    
    return (
        <ul id='answers'>
            {shuffledAnswer.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                console.log(isSelected);
                let cssClasses = '';
                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                    console.log('answer selected');
                } else if (answerState === 'correct' && isSelected) {
                    cssClasses = 'correct';
                    console.log('correct answer selected');
                } else if (answerState === 'incorrect' && isSelected) {
                    cssClasses = 'wrong';
                    console.log('wrong answer selected');
                }

                return (
                    <li key={answer} className="answer"><button className={cssClasses} onClick={() => { onSelect(answer) }}>{answer}</button></li>
                )
            })}
        </ul>
    );
};

export default Answers; 