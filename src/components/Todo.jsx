const Todo = ({ title }) => {
  return (
    <div className="todo-item">
      <div className="todo-body">{title}</div>
      <div>
        <button className="todo-edit-btn">Edit</button>
        <button className="todo-delete-btn">Delete</button>
      </div>
    </div>
  );
};
export default Todo;
