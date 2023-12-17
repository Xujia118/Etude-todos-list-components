import { useState } from "react";

function TaskForm({ taskList, setTaskList }) {
  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    text: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setTaskList([newTask, ...taskList]);
    setNewTask({
      id: crypto.randomUUID(),
      text: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-task"
        value={newTask.text}
        placeholder="Add Task"
        onChange={(event) =>
          setNewTask({ ...newTask, text: event.target.value })
        }
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;
