import React from "react";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueTracker from "./components/IssueTracker";
import { IssueContextProvider } from "./context/IssueContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <IssueContextProvider>
          <Switch>
            <Route exact path="/">
              <AddIssue />
            </Route>
            <Route path="/issues">
              <IssueTracker />
            </Route>
          </Switch>
        </IssueContextProvider>
      </Router>
    </div>
  );
}

export default App;
