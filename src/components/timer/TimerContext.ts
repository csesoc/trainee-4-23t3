import React from "react";
import { SetStateAction } from 'react';


interface ITimerContext {
	studyTime: number,
	breakTime: number,
	setStudyTime: React.Dispatch<SetStateAction<number>>,
	setBreakTime: React.Dispatch<SetStateAction<number>>,
	setShowSettings: React.Dispatch<SetStateAction<boolean>>,
}

// skull i regret using typescript
const TimerContext = React.createContext<ITimerContext>({
	studyTime: 0,
	breakTime: 0,
	setStudyTime: () => {},
	setBreakTime: () => {},
	setShowSettings: () => {}
});

export default TimerContext;