import React, { useContext } from 'react'
import { SetStateAction } from 'react'

interface IStoreContext {
  completed: number,
  setCompleted: React.Dispatch<SetStateAction<number>>,
  totalTasks: number,
  setTotalTasks: React.Dispatch<SetStateAction<number>>,
}

export const StoreContext = React.createContext<IStoreContext>({
  completed: 0,
  setCompleted: () => {},
  totalTasks: 0,
  setTotalTasks: () => {},
});

export default ({ children }) => {

  const [completed, setCompleted] = React.useState(0);
  const [totalTasks, setTotalTasks] = React.useState(2);

  return (
    <StoreContext.Provider value={{
      completed,
      setCompleted,
      totalTasks,
      setTotalTasks,
      }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  return useContext(StoreContext);
}