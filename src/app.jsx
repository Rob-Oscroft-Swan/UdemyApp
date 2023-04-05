import "./app.css";
import Form from "./components/Form";
import { TodoList } from "./components/TodoList";

import { useState } from "react";

export function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    const todosCopy = [...todos];

    todosCopy.splice(todoIndex, 1);

    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
