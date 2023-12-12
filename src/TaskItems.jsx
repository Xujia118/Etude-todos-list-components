import React from "react";
import { useState } from "react";
import EditTask from "./EditTask";

function TaskItems({ taskList, setTaskList }) {
  const [editingTaskId, setEditingTaskId] = useState(null);

  function handleDeleteTask(taskId) {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  return (
    <ul>
      {taskList.length === 0 && "No task"}
      {taskList.map((task) =>
        editingTaskId === task.id ? (
          <EditTask
            key={task.id}
            taskList={taskList}
            setTaskList={setTaskList}
            editingTaskId={editingTaskId}
            setEditingTaskId={setEditingTaskId}
            taskText={task.text}
          />
        ) : (
          <li key={task.id}>
            {task.text}
            <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        )
      )}
    </ul>
  );
}

export default TaskItems;
