// ----------Inbuilt components and modules----------
import { useState } from "react";

// ----------Third-party components and modules----------
import axios from "axios";

const Todo = ({ id, title, todo, status, load }) => {
  // Function for fetching a single todo
  const fetchTodo = async () => {
    try {
      let res = await axios.get(
        `https://localhost:7038/api/todo/getbyid/${id}`
      );
      todo(res.data);
      status(1);
    } catch (exception) {
      console.log(exception.response);
    }
  };

  // Function for deleting a todo
  const deleteTodo = async () => {
    try {
      await axios.delete(`https://localhost:7038/api/todo/delete/${id}`);
      load();
    } catch (exception) {
      console.log(exception.response);
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-body">{title}</div>
      <div>
        <button className="todo-edit-btn" onClick={() => fetchTodo()}>
          Edit
        </button>
        <button className="todo-delete-btn" onClick={() => deleteTodo()}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
