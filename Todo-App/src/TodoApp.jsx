import React, { useState } from "react";
import "./style.css"; // CSS file को import करना मत भूलना

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // Todo list state
  const [input, setInput] = useState(""); // Input field state

  const generateId = () => Date.now();

  const addTodo = () => {
    if (input.trim() === "") return; // Empty input add न हो
    setTodos([...todos, { text: input, id: generateId() }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h2>📝 Simple Todo App</h2>
      <div>
        <input
          type="text"
          className="todo-input"
          value={input}
          placeholder="Enter todo..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
