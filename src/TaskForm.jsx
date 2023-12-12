import { useState } from "react";

function TaskForm({ taskList, setTaskList }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTaskList([
      {
        id: crypto.randomUUID(),
        text: newTask,
      },
      ...taskList,
    ]);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task">New Task: </label>
      <input
        type="text"
        id="new-task"
        value={newTask}
        placeholder="Add Task"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;
