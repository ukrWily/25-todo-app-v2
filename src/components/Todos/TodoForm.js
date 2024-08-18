import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  //
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };
  //
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter new todo"
          value={text}
        />
        <button type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
export default TodoForm;
