import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import { uid } from "uid";
import List from "./components/list";

function App() {
  const [activities, setActivities] = useState([]);
  function handleSubmit(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <div>
      <List activities={activities} />
      <Form onAddActivity={handleSubmit} />
    </div>
  );
}

export default App;
