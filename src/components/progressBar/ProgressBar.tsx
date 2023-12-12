import {useContext} from 'react';
import "./ProgressBar.css"
import { userContext } from '../dailies/DailyList'

// interface ProgressBarProps {
//     // tasks: any;
// }

const ProgressBar = () => {
  const tasks = useContext(userContext);
    const calculatePercentage = (): number => {
      console.log(tasks);
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((task) => task.isCompleted).length;

        return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    };

    const completionPercentage = calculatePercentage();

    return (
        <div className='progress-container'>
            <div className='progress-text'>
                progress {completionPercentage}%
            </div>
            <div className='progress-bar'>
                <div 
                className='progress'
                style={{
                    width: `${completionPercentage}%`
                }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;