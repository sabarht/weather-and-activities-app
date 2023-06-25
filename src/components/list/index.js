export default function List({ activities }) {
  console.log({ activities });
  return (
    <ul>
      {activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
}
