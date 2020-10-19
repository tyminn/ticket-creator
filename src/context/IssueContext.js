import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const IssueContext = createContext();

export const IssueContextProvider = ({ children }) => {
  const [issue, setIssue] = useState([
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa explicabo ab hic ullam nam. Harum fugit velit eaque nobis assumenda.",
      assign: "unknown",
      id: 1,
      priority: "high",
    },
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa explicabo ab hic ullam nam. Harum fugit velit eaque nobis assumenda.",
      assign: "admin",
      id: 2,
      priority: "medium",
    },
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa explicabo ab hic ullam nam. Harum fugit velit eaque nobis assumenda.",
      assign: "admin",
      id: 3,
      priority: "normal",
    },
  ]);

  const addIssue = (description, assign, priority) => {
    setIssue([
      ...issue,
      {
        description: description,
        assign: assign,
        priority: priority,
        id: uuidv4(),
      },
    ]);
    console.log(issue);
  };

  const removeIssue = (id) => {
    setIssue(issue.filter((issue) => issue.id !== id));
  };

  useEffect(() => {
    const data = localStorage.getItem("issue");
    if (data) {
      setIssue(JSON.parse(data));
    }
  }, []);

  // update local storage
  useEffect(() => {
    localStorage.setItem("issue", JSON.stringify(issue));
  }, [issue]);

  return (
    <IssueContext.Provider value={{ addIssue, removeIssue, issue }}>
      {children}
    </IssueContext.Provider>
  );
};
