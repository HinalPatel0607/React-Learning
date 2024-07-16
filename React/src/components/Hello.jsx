const name = "Rob";
function displayMessage() {
  return "Wow!!!";
}
function Hello() {
  return (
    <div>
      <h1>
        Hello from a component
        <br />
        {name}
        <br />
        {10 + 20}
        <br />
        {displayMessage()}
      </h1>
    </div>
  );
}

export default Hello;
