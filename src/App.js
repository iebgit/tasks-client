import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskListPage from "./components/TaskListPage";
import CreateTaskForm from "./components/CreateTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App-body">
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/tasks/new" element={<CreateTaskForm />} />
          <Route path="/tasks/:id" element={<EditTaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
