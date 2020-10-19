import React from "react";

export default function SingleIssue({
  description,
  assign,
  priority,
  id,
  removeIssue,
}) {
  return (
    <div className="single-issue-container">
      <p>
        <span className="title">Assigned </span>
        {assign}
        <span className="close" onClick={() => removeIssue(id)}>
          Close Issue
        </span>
      </p>
      <p>
        <span className="title">Priority </span>
        {priority}
      </p>
      <p>
        <span className="title">Description </span>
      </p>
      <p>{description}</p>
      <hr />
    </div>
  );
}
