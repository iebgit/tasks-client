import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import CreateTaskForm from "./CreateTaskForm";
import EditTaskForm from "./EditTaskForm";

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

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

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

  const handleCancelButtonClick = () => {
    setEditingTask(null);
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
