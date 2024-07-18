import React from "react";
import Hello from "./components/Hello";
import Destructuringprops from "./components/Destructuringprops";
import Destructuringpropsindefinition from "./components/Destructuringpropsindefinition";
import Arrayprop from "./components/Arrayprop";
import Objectprop from "./components/Objectprop";
import Destructuringobjectprop from "./components/Destructuringobjectprop";
import RenderArray from "./components/RenderArray";
import RenderArrayOfObjects from "./RenderArrayOfObjects";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Nishit",
    message: "Hi There!!",
    emoji: "🖐",
    seatNumbers: [1, 4, 7],
  };
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
      <Arrayprop seatNumbers={seatNumbers} />
      <Objectprop person={person} />
      <Destructuringobjectprop person={person} />
      <RenderArray />
      <RenderArrayOfObjects />
    </div>
  );
}

export default App;
