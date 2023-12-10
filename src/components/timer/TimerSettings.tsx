import { useContext } from "react";
import ReactSlider from "react-slider";
import TimerContext from "./TimerContext";

const TimerSettings = () => {
    const timerInfo = useContext(TimerContext);

    return (
        <>
            <h2>Study</h2>
            <ReactSlider
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                value={timerInfo.studyTime}
                onChange={newValue => timerInfo.setStudyTime(newValue)}
                min={1}
                max={120}
                />
            <h2>{timerInfo.studyTime}</h2>
            <h2>Break</h2>
            <ReactSlider
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                value={timerInfo.breakTime}
                onChange={newValue => timerInfo.setBreakTime(newValue)}
                min={1}
                max={120}
                />
            <h2>{timerInfo.breakTime}</h2>
            <button onClick={() => timerInfo.setShowSettings(false)}>ok!</button>
        </>
    );
}

export default TimerSettings;