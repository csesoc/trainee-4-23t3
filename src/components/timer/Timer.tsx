import '../../App.css'
import Clock from './clock/Clock';
import './Timer.css'
import { useState } from 'react';
import TimerSettings from './settings/TimerSettings';
import TimerContext from './TimerContext';

const Timer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <>
      <div id="timer-container">
        <TimerContext.Provider value={{
          studyTime,
          breakTime,
          setStudyTime,
          setBreakTime,
          setShowSettings,
        }}>
          {showSettings ? <TimerSettings/> : <Clock/>}
        </TimerContext.Provider>
      </div>
    </>
  )
}

export default Timer;