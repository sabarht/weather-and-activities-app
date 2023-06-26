export default function WeatherDisplay({ weather }) {
  return (
    <section>
      <span>
        {weather.condition}
        {weather.temperature} °C
      </span>
    </section>
  );
}
