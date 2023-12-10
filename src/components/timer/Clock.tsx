import { useContext, useEffect, useState, useRef } from "react";
import TimerContext from "./TimerContext";

const Clock = () => {
    const timerInfo = useContext(TimerContext);

    const [isPaused, setisPaused] = useState(true);
    const [currTime, setCurrTime] = useState(timerInfo.studyTime * 60);
    const [isStudying, setIsStudying] = useState(true);

    const isPausedRef = useRef(isPaused);
    const currTimeRef = useRef(currTime);
    const isStudyingRef = useRef(isStudying)

    useEffect(() => {
        const transition = () => {
            const newIsStudying = !isStudyingRef.current;
    
            setIsStudying(newIsStudying);
            isStudyingRef.current = newIsStudying;
    
            const newCurrTime = (newIsStudying ? timerInfo.studyTime : timerInfo.breakTime) * 60
            setCurrTime(newCurrTime);
            currTimeRef.current = newCurrTime;
        }
            const interval = setInterval(() => {
                if (isPausedRef.current) {return;}
                if (currTimeRef.current === 0) {transition();}

                tick();
            }, 100);
            return () => clearInterval(interval);
        }, [timerInfo]
    )

    const tick = () => {
        currTimeRef.current--;
        setCurrTime(currTimeRef.current);
    }

    const reset = () => {
        setIsStudying(true);
        isStudyingRef.current = isStudying;
        setCurrTime(timerInfo.studyTime * 60);
        currTimeRef.current = timerInfo.studyTime * 60;
    }

    const mins = Math.floor(currTime / 60);
    const secs = currTime % 60;
    const clockDigit = ((time:number) => time < 10 ? '0'+time : time);

    return (
        <>
            {isStudying ? <h2>Study</h2> : <h2>Break</h2>}
            <h1>{`${mins} : ${clockDigit(secs)}`}</h1>
            <button onClick={() => {isPausedRef.current = !isPaused; setisPaused(isPausedRef.current)}}>{isPaused ? "Start" : "Pause"}</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => timerInfo.setShowSettings(true)}>Settings</button>
        </>
    )
}

export default Clock;
