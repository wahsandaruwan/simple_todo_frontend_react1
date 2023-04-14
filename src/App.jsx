import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h2 className="title">
        Simple <span>Todo</span> App
      </h2>
      <div className="todo-input-area">
        <input className="todo-input-box" type="text" />
        <button className="todo-save-btn">Save</button>
      </div>
      <div className="todo-display-area">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
