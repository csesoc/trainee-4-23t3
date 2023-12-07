import React from 'react';
import "./ProgressBar.css"

interface ProgressBarProps {
    tasks: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ tasks }) => {
    const calculatePercentage = (): number => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((task) => task.isCompleted).length;

        return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    };

    const completionPercentage = calculatePercentage();

    return (
        <div className='progress-container'>
            <div className='progress-bar'>
                <div 
                className='progress'
                style={{
                    width: `${completionPercentage}%`
                }}
                ></div>
            </div>
            <div className='progress-text'>
                progress {completionPercentage}%
            </div>
        </div>
    );
};

export default ProgressBar;