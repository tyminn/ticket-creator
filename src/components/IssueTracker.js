import React, { useContext } from "react";
import { IssueContext } from "../context/IssueContext";
import { Link } from "react-router-dom";
import SingleIssue from "./SingleIssue";

export default function IssueTracker() {
  const { issue, removeIssue } = useContext(IssueContext);

  return (
    <div>
      <h1>Issue Tracker</h1>
      <div className="issue-container">
        {issue.map((issue) => (
          <SingleIssue
            key={issue.id}
            id={issue.id}
            description={issue.description}
            assign={issue.assign}
            priority={issue.priority}
            removeIssue={removeIssue}
          />
        ))}
      </div>
      <div className="link-content">
        <Link to="/issues" className="btn">
          Current Issues
        </Link>
        <Link to="/" className="btn active">
          Add Issue
        </Link>
      </div>
    </div>
  );
}
