import "./App.css";
import Form from "./components/form";
import React, { useEffect } from "react";
import { uid } from "uid";
import List from "./components/list";
import WeatherDisplay from "./components/weather-display";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/weather";
// const isGoodWeather = true;
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: "",
  });

  useEffect(() => {
    async function fetchingWeatherApi() {
      try {
        const response = await fetch(URL);
        const weather = await response.json();
        console.log(weather);
        setWeather(weather);
      } catch (error) {
        console.log("ERROR in FETCH: ", error);
      }
    }
    fetchingWeatherApi();
  }, [setWeather]);

  function handleSubmit(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    console.log(activities);
  }
  // function handleFilter() {
  //   activities.filter((activity) => activity.isGoodForWeather === );
  // }

  return (
    <div>
      <WeatherDisplay weather={weather} />
      <List activities={activities} />
      <Form onAddActivity={handleSubmit} />
    </div>
  );
}

export default App;
