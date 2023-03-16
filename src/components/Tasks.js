import React from "react";

const Task = ({ task, onUpdate, onDelete }) => {
  const handleToggleCompleted = () => {
    onUpdate(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
