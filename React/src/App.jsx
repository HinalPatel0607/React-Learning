import React from "react";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello name="Rob" message="How are you??" />
      <Hello name="Tom" message="You are also here, Great!!" />
    </div>
  );
}

export default App;
