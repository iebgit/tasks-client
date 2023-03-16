import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/tasks", newTask);
      setNewTask({ title: "", description: "" });
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Create Task</h1>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <br />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTaskForm;
