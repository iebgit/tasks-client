import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      const remainingTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(remainingTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditButtonClick = (taskId) => {
    const taskToEdit = tasks.find((task) => task._id === taskId);
    setEditingTask(taskToEdit);
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        onEditButtonClick={handleEditButtonClick}
        onDeleteButtonClick={handleDeleteTask}
      />
    </div>
  );
};

export default TaskListPage;
