import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [total, setTotal] = useState(0);

  const handleAddItem = (added) => {
    setTotal(total + added);
  };

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">TailWind Test</h1>
      <h3>Overall Total Items : {total} </h3>
      <div className="cards-container flex">
        <Card username="shreya" onItemChange={handleAddItem} />
        <Card username="Angel" onItemChange={handleAddItem} />
      </div>
    </>
  );
}

export default App;
