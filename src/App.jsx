import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import uuid from "react-uuid";

function App() {
  // All todos state
  const [todos, setTodos] = useState([]);

  // Run once
  useEffect(() => {
    // Load all todos
    loadTodos();
  }, []);

  // Function for loading all todos
  const loadTodos = async () => {
    try {
      let res = await axios.get("https://localhost:7038/api/todo/getall");
      setTodos(res.data);
    } catch (exception) {
      console.log(exception.response);
    }
  };

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
        {todos?.map((item, index) => (
          <Todo title={item.todoTitle} key={uuid()} />
        ))}
      </div>
    </div>
  );
}

export default App;
