export default function List({ activities, onDeleteActivity }) {
  // onDeleteActivity(activity.id);
  return (
    <ul>
      {activities?.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button onClick={() => onDeleteActivity(activity.id)}>X</button>;
        </li>
      ))}
    </ul>
  );
}
