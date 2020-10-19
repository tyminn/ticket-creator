import React, { useContext, useState } from "react";
import { IssueContext } from "../context/IssueContext";
import { Link } from "react-router-dom";

export default function AddIssue() {
  const { addIssue } = useContext(IssueContext);

  const [description, setDescription] = useState("");
  const [assign, setAssign] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIssue(description, assign, priority);
  };

  return (
    <div className="add_issue">
      <h1>Issue Tracker</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Description</p>
            <input
              type="text"
              placeholder="Description of Issue"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <p>Assign to</p>
            <select required onChange={(e) => setAssign(e.target.value)}>
              <option value="">Description of Issue to...</option>
              <option value="John Doe">John Doe</option>
              <option value="John Smith">John Smith</option>
            </select>
          </label>
          <label>
            <p>Priority</p>
            <select
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="">Priority of Issue...</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Normal">Normal</option>
              <option value="Small">Small</option>
            </select>
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
      <div className="link-content">
        <Link to="/issues" className="btn active">
          Current Issues
        </Link>
        <Link to="/" className="btn">
          Add Issue
        </Link>
      </div>
    </div>
  );
}
