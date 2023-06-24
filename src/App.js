import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState();
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <p>{activities}</p>
    </div>
  );
}

export default App;
