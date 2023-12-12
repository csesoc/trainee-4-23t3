import { useContext } from "react";
import ReactSlider from "react-slider";
import TimerContext from "../TimerContext";
import './TimerSettings.css';
import '../Timer.css'

const TimerSettings = () => {
    const timerInfo = useContext(TimerContext);

    return (
        <div id='settings-container'>
            <div id='slider-box'>
                <h2 id='status-text'>Study</h2>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    value={timerInfo.studyTime}
                    onChange={newValue => timerInfo.setStudyTime(newValue)}
                    min={1}
                    max={60}
                    />
                <h2 id='status-text'>{(timerInfo.studyTime < 10 ? '0' + timerInfo.studyTime : timerInfo.studyTime) + ':00'}</h2>
            </div>
            
            <div id='slider-box'>
            <h2 id='status-text'>Break</h2>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    value={timerInfo.breakTime}
                    onChange={newValue => timerInfo.setBreakTime(newValue)}
                    min={1}
                    max={60}
                    />
                <h2 id='status-text'>{(timerInfo.breakTime < 10 ? '0' + timerInfo.breakTime : timerInfo.breakTime) + ':00'}</h2>
            </div>
            
            <div id='slider-box'><button id='clock-button' onClick={() => timerInfo.setShowSettings(false)}>ok!</button></div>
        </div>
    );
}

export default TimerSettings;