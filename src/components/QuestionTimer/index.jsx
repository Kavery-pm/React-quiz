import { useEffect, useState } from "react";

const QuestionTimer = ({ time, onTimeout }) => {
    const [answeringTime, setansweringTime] = useState(time);
    useEffect(() => {
        const timer = setTimeout(onTimeout, time)
        return () => clearTimeout(timer);
    }, [onTimeout, time]);
    useEffect(() => {
        const interval = setInterval(() => {
            setansweringTime((prevTime) => prevTime - 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return <progress id='question-time' max={time} value={answeringTime}></progress>;
};

export default QuestionTimer;