import { useEffect, useRef, useState } from "react";
import TaskItem from "./DailyItem";
import ProgressBar from "../progressBar/ProgressBar";
import "./DailyList.css"

interface item {
    id: number;
    task: string;
    isCompleted: boolean;
};

function DailyTaskList() {
    // still not complete
    const [tasks, setTasks] = useState(Array<item>);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTasks([
            {
                id: Math.max(0, ...tasks.map((item) => item.id)) + 1,
                task: "",
                isCompleted: false,
            },
        ]);
    }, []);

    const addDailyTask = () => {
        let newTasks = [...tasks];

        let taskObject = {
            id: Math.max(0, ...tasks.map((item) => item.id)) + 1,
            task: "",
            isCompleted: false,
        };

        newTasks.push(taskObject);
        setTasks(newTasks);
    };

    const deleteDailyTask = (taskId: number, event: any) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);

        setTasks(updatedTasks);
    }

    return (
        <div className="dailyTaskList" ref={divRef}>
            <div className="dailies">
                <div className="overlap">
                    <div className="rectangle"></div>
                    <div className="border"></div>
                    <h2 className="Title">Daily Tasks</h2>
                    <div className="task-group">
                        <div className="tasks">
                            {tasks.map((item: item) => (
                                <TaskItem
                                    taskId={item.id}
                                    deleteTask={deleteDailyTask}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className="add-button" onClick={addDailyTask}>
                            <div className="text-wrapper-2">+&nbsp;&nbsp;Add new daily task</div>
                        </button>
                    </div>
                </div>
            </div>
            <ProgressBar tasks={tasks}/>
        </div>
    );
}

export default DailyTaskList;