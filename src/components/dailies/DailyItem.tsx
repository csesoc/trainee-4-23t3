import "./DailyItem.css"

type deleteTaskFunction = (taskId: number, event: any) => void;

interface DailiesItemObject {
    taskId: number;
    tasks: any;
    setTasks: any;
    deleteTask: deleteTaskFunction;
}

const TaskItem = (props: DailiesItemObject) => {
  
    let task = props.tasks.find((item) => item.id === props.taskId);

    if (!task) {
        console.error(`Task with ID ${props.taskId} not found`);
        return null;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTasks = props.tasks.map((t) =>
            t.id === props.taskId ? { ...t, task: event.target.value } : t
        );
        props.setTasks(newTasks);
    };

    const handleChecked = () => {
        const newTasks = props.tasks.map((t) =>
            t.id === props.taskId ? { ...t, isCompleted: !t.isCompleted } : t     
        );
        props.setTasks(newTasks);
    };

    return (
        <div className="taskItem">
            <div className="item">
                <label className="checkbox">
                    <input 
                        className="checkbox"
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={handleChecked}
                        style={{}}
                    />
                    <span className="checkmark"></span>
                </label>
                <input
                    className="textBox"
                    type="text"
                    value={task.task}
                    placeholder="Type your task here..."
                    onChange={handleChange}
                    style={{
                        textDecorationLine: task.isCompleted ? "line-through" : "none",
                        pointerEvents: task.isCompleted ? "none" : "initial",
                        color: task.isCompleted ? "#656f5c" : "#000000"
                    }}
                    disabled={task.isCompleted}
                />

                <button
                    className="delete-button"
                    onClick={(event) => props.deleteTask(props.taskId, event)}
                >X</button>
            </div>
        </div>
    );
};

export default TaskItem;