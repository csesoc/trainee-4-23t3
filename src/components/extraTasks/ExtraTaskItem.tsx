import { useStoreContext } from "../../context/TaskContext";
import "./ExtraTaskItem.css";

type deleteTaskFunction = (taskId: number, event: any) => void;

interface ExtraTaskItemObject {
    taskId: number;
    tasks: any;
    setTasks: any;
    deleteTask: deleteTaskFunction;
}

const ExtraTaskItem = (props: ExtraTaskItemObject) => {
  const {setCompleted} = useStoreContext();
  
  let task = props.tasks.find((item : any) => item.id === props.taskId);

  if (!task) {
      console.error(`Task with ID ${props.taskId} not found`);
      return null;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTasks = props.tasks.map((t : any) =>
          t.id === props.taskId ? { ...t, task: event.target.value } : t
      );
      props.setTasks(newTasks);
  };

  const handleNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTasks = props.tasks.map((t : any) =>
        t.id === props.taskId ? { ...t, notes: event.target.value } : t
    );
    props.setTasks(newTasks);
  };

  const handleChecked = () => {
      const prevDone = props.tasks.filter((t : any) => t.isCompleted).length;

      const newTasks = props.tasks.map((t : any) =>
          t.id === props.taskId ? { ...t, isCompleted: !t.isCompleted } : t     
      );
      props.setTasks(newTasks);

      const newDone = newTasks.filter((t : any) => t.isCompleted).length;

      setCompleted(prevComplete => prevComplete - prevDone + newDone);
  };

  return (
    <div className="big-container">
      <div className="time-container">
        <div className="start-time">
        <input
          className="timeBox"
          type="text"
          placeholder="00:00"
          style={{
              textDecorationLine: task.isCompleted ? "line-through" : "none",
              pointerEvents: task.isCompleted ? "none" : "initial",
              color: task.isCompleted ? "#656f5c" : "#f5f5f5"
          }}
          disabled={task.isCompleted}
        />
        </div>
        <span className="dot">•</span>
        <span className="dot">•</span>
        <span className="dot">•</span>
        <span className="dot">•</span>
        <div className="end-time">
          <input
            className="timeBox"
            type="text"
            placeholder="00:00"
            style={{
                textDecorationLine: task.isCompleted ? "line-through" : "none",
                pointerEvents: task.isCompleted ? "none" : "initial",
                color: task.isCompleted ? "#656f5c" : "#f5f5f5"
            }}
            disabled={task.isCompleted}
          />
        </div>
      </div>

      <div className="folder-container">
        <div className="upper-part">
          <div className="tab"/>
          <div className="progression-bar"></div>
        </div>

        <div className="folder">
          <div className="folder-top">
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

        <input
          className="notesBox"
          type="text"
          value={task.notes}
          placeholder="Extra notes here..."
          onChange={handleNotes}
          style={{
              textDecorationLine: task.isCompleted ? "line-through" : "none",
              pointerEvents: task.isCompleted ? "none" : "initial",
          }}
          disabled={task.isCompleted}
        />
        </div>
      </div>
    </div>
  );
};

export default ExtraTaskItem;
