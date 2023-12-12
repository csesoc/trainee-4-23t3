import "./ProgressBar.css"
import { useStoreContext } from '../../context/TaskContext';

const ProgressBar = () => {
  const {completed, totalTasks} = useStoreContext();

	const calculatePercentage = (): number => {
		return Math.min(totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0, 100);
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