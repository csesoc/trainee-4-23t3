import { useContext, useEffect, useState, useRef } from "react";
import TimerContext from "../TimerContext";
import './Clock.css';
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";

const Clock = () => {
  const timerInfo = useContext(TimerContext);

  const [isPaused, setisPaused] = useState(true);
  const [currTime, setCurrTime] = useState(timerInfo.studyTime * 60);
  const [isStudying, setIsStudying] = useState(true);

  const isPausedRef = useRef(isPaused);
  const currTimeRef = useRef(currTime);
  const isStudyingRef = useRef(isStudying)

  // doesnt work without useRef send help
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
      }, 1000);
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
    <div id="clock-container">
      <div id="clock-left">
        {isStudying ? <h2 id='status-text'>back to work...</h2> : <h2 id='status-text'>time for a break!</h2>}
        <h1 id='digit-text'>{`${mins}:${clockDigit(secs)}`}</h1>
      </div>

      <div id="clock-right">
        <div>
          <button id='icon-container' 
            onClick={() => {isPausedRef.current = !isPaused; setisPaused(isPausedRef.current)}}>
            {isPaused ? <PlayButton/> : <PauseButton/>}
          </button>
          <button id='icon-container' onClick={() => reset()}><ResetButton/></button>
        </div>
        <button id='clock-button' onClick={() => timerInfo.setShowSettings(true)}>Settings</button>
      </div>
    </div>
  )
}

export default Clock;
