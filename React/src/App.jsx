import React from "react";
import Hello from "./components/Hello";
import Destructuringprops from "./components/Destructuringprops";
import Destructuringpropsindefinition from "./components/Destructuringpropsindefinition";

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello name="Rob" message="How are you??" />
      <Hello name="Tom" message="You are also here, Great!!" />
      <Destructuringprops name="Hinal" message="Good Luck" />
      <Destructuringpropsindefinition subject="React" grade="A" />
    </div>
  );
}

export default App;
