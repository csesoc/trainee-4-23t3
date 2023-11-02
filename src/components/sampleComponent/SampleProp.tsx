type deleteTodoFn = (todoId:number) => void;

interface ToDoObj {
    todoId: number;
    deleteTodoFn: deleteTodoFn;
}

const SampleProp = (props:ToDoObj) => {
    return (
       <>
       
       </> 
    )
}