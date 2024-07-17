const name = "Rob";
function displayMessage() {
  return "Wow!!!";
}
function Hello(props) {
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
        <br />
        Hello Mike!!
        <br />
        Hello {props.name}, {props.message}
      </h1>
    </div>
  );
}

export default Hello;
