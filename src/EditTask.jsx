import { useState } from "react";

function EditTask({
  taskList,
  setTaskList,
  editingTaskId,
  setEditingTaskId,
  taskText,
}) {
  const [editedTaskText, setEditedTaskText] = useState(taskText);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedTaskList = taskList.map((task) =>
      task.id === editingTaskId ? { ...task, text: editedTaskText } : task
    );

    setTaskList(updatedTaskList);
    setEditingTaskId(null);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editedTaskText}
          onChange={(event) => setEditedTaskText(event.target.value)}
        />
        <button>Save</button>
      </form>
    </>
  );
}

export default EditTask;
