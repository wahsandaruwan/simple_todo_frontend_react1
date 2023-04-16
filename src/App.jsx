// ----------Inbuilt components and modules----------
import { useState, useEffect } from "react";

// ----------Third-party components and modules----------
import axios from "axios";
import uuid from "react-uuid";

// ----------Custom components and modules----------
import Todo from "./components/Todo";

function App() {
  // All todos state
  const [todos, setTodos] = useState([]);

  // Single todo state
  const [todo, setTodo] = useState({
    todoId: 0,
    todoTitle: "",
  });

  // Add or update status
  const [status, setStatus] = useState(0);

  // Run once
  useEffect(() => {
    // Load all todos
    loadTodos();
  }, []);

  // Function for clearing states
  const clearAll = () => {
    setTodo({ todoId: 0, todoTitle: "" });
    setStatus(0);
  };

  // Function for loading all todos
  const loadTodos = async () => {
    try {
      let res = await axios.get(`https://localhost:7038/api/todo/getall`);
      setTodos(res.data);
    } catch (exception) {
      console.log(exception.response);
    }
  };

  // Function for saving a todo
  const saveTodo = async () => {
    if (todo.todoTitle == "") {
      alert("Enter todo title!");
      return;
    }
    try {
      // To update
      if (status == 1) {
        await axios.put(
          `https://localhost:7038/api/todo/update/${todo.todoId}`,
          todo
        );
        alert("Sucessfully updated!");
      }
      // To add
      else {
        await axios.post(`https://localhost:7038/api/todo/create`, todo);
        alert("Sucessfully added!");
      }
      // Clear
      clearAll();
      // Load
      loadTodos();
    } catch (exception) {
      alert("Operation failed!");
      console.log(exception.response);
    }
  };

  return (
    <div className="app">
      <h2 className="title">
        Simple <span>Todo</span> App
      </h2>
      <div className="todo-input-area">
        <input
          className="todo-input-box"
          type="text"
          value={todo.todoTitle}
          onChange={(e) => setTodo({ ...todo, todoTitle: e.target.value })}
        />
        <button className="todo-save-btn" onClick={() => saveTodo()}>
          Save
        </button>
        <button className="todo-reset-btn" onClick={() => clearAll()}>
          Reset
        </button>
      </div>
      <div className="todo-display-area">
        {todos?.map((item) => (
          <Todo
            id={item.todoId}
            title={item.todoTitle}
            todo={(data) => setTodo(data)}
            status={(data) => setStatus(data)}
            load={() => loadTodos()}
            key={uuid()}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
