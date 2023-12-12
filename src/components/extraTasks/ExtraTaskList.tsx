import "../../App.css";
import ExtraTaskItem from "./ExtraTaskItem";
import { useEffect, useRef, useState, createContext } from "react";
import { useStoreContext } from "../../context/TaskContext";
import "./ExtraTaskList.css"

interface item {
	id: number;
	task: string;
	isCompleted: boolean;
};

export const userContext = createContext<Array<item>>([]);

function ExtraTaskList() {
	const {setTotalTasks, setCompleted} = useStoreContext();
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
		setTotalTasks(prevTotal => prevTotal + 1);
	};

	const deleteDailyTask = (taskId: number, event: any) => {
		const prevDone = tasks.filter((t) => t.isCompleted).length;
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		const newDone = updatedTasks.filter(t => t.isCompleted).length;

		setTasks(updatedTasks);
		setTotalTasks(prevTotal => prevTotal - 1);
		setCompleted(prevComplete => prevComplete - prevDone + newDone);
	}

  return (
    <userContext.Provider value={tasks}>
    <div className="extraTaskList" ref={divRef}>
      <h2 className="Title">Tasks</h2>

      <div className="extratasks">
        {tasks.map((item: item) => (
          <ExtraTaskItem
            taskId={item.id}
            deleteTask={deleteDailyTask}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>

      <div>
        <button className="add-button" onClick={addDailyTask}>
          <div className="text-wrapper-2">+&nbsp;&nbsp;Add new task</div>
        </button>
      </div>
    </div>
	  </userContext.Provider>
  );
};
/*
<>
<div id="temp-box">
  <ExtraTaskItem></ExtraTaskItem>
  <ExtraTaskItem></ExtraTaskItem>
</div>
</>
*/
export default ExtraTaskList;
