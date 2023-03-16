import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCompleted(res.data.completed);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:5000/tasks/${id}`, {
        title,
        description,
        completed,
      })
      .then(() => nav("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completed"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
