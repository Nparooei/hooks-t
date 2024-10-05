import { memo } from "react";

const Tasks = ({ tasks, addTask }) => {
  console.log("rendered task component");
  return (
    <>
      <h2>My Tasks</h2>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
      <button onClick={addTask}>Add Tasks</button>
    </>
  );
};

export default memo(Tasks);