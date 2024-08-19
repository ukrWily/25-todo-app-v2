import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

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
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  //
  const resetTodosHandler = () => {
    setTodos([]);
  };
  //
  const deleteCompletedTodosHandler = (id) => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  //
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler} />
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
