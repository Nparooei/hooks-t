import { useState, useCallback } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [taskArray, setTaskArray] = useState([]);

  const increaseCount = () => {
    setTaskCount((prevCount) => prevCount + 1);
  };

  const addTask = useCallback(() => {
    setTaskArray((prevTasks) => [...prevTasks, "New Task"]);
  }, [taskArray]);

  return (
    <>
      <TaskList tasks={taskArray} addTask={addTask} />
      <hr />
      <div>
        Count: {taskCount}
        <button onClick={increaseCount}>+</button>
      </div>
    </>
  );
};

export default App;
