import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

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
        <Button type="submit" title="Submit">
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
