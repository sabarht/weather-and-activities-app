import "./App.css";
import Form from "./components/form";
import React from "react";
import { uid } from "uid";
import List from "./components/list";
import useLocalStorageState from "use-local-storage-state";

// const isGoodWeather = true;
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

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
