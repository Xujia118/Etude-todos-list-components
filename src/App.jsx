import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItems from "./TaskItems";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <TaskItems taskList={taskList} setTaskList={setTaskList}/>
    </>
  );
}

export default App;
