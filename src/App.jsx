import { useState,useMemo } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const costlyResult = useMemo(()=>costlyComputation(counter),[counter]);

  const incrementCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const addNewTask = () => {
    setTaskList((prevTasks) => [...prevTasks, "New Task"]);
  };

  return (
    <div>
      <div>
        <h2>Task List</h2>
        {taskList.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <hr />
      <div>
        Count: {counter}
        <button onClick={incrementCounter}>+</button>
        <h2>Costly Computation Result</h2>
        {costlyResult}
      </div>
    </div>
  );
};

const costlyComputation = (value) => {
  console.log("Performing costly computation...");
  console.time("Costly Computation Time");
  for (let i = 0; i < 1000000000; i++) {
    value += 1;
  }
  console.timeEnd("Costly Computation Time");
  return value;
};

export default App;
