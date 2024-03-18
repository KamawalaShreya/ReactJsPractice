import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <>
      <div>
        <h1>Learn Redux</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
