export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = event.target.elements;
    console.log(data);
    event.target.reset();
  }
  return (
    <>
      <h1>Add new activity:</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </section>
        <section>
          <label htmlFor="check-box">Good weather activity:</label>
          <input type="checkbox" id="check-box" name="Good-weather-activity:" />
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
