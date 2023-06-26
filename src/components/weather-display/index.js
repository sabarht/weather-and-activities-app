export default function WeatherDisplay({ weather }) {
  return (
    <header>
      <h1>
        {weather.condition}
        {weather.temperature} °C
      </h1>
    </header>
  );
}
