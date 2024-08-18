import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  //
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  //
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  //
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
