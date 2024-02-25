import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let [msg, setMsg] = useState();

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setMsg("Counter value always between 0 to 20");
    }
  };

  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setMsg("Counter value always between 0 to 20");
    }
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <label htmlFor="msg">{msg}</label>
      <br />
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeCounter}>Remove Value</button>
    </>
  );
}

export default App;
