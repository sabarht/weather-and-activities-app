import "./App.css";
import Form from "./components/form";
import React, { useEffect } from "react";
import { uid } from "uid";
import List from "./components/list";
import WeatherDisplay from "./components/weather-display";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/weather";
const isGoodWeather = true;
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: "",
  });

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  console.log("Activities: ", activities);
  console.log("filter array", filteredActivities);

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
      const id = setInterval(fetchingWeatherApi, 60000);
      return () => {
        clearInterval(id);
      };
    }
    fetchingWeatherApi();
  }, [setWeather]);

  function handleSubmit(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    console.log(activities);
  }

  return (
    <div>
      <WeatherDisplay weather={weather} />
      <List activities={filteredActivities} />
      <Form onAddActivity={handleSubmit} />
    </div>
  );
}

export default App;
