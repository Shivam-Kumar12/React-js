import React, { useContext } from "react";
import styles from "./Welcome_message.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const Welcome_message = () => {
  
 const contextobj = useContext(TodoItemsContext)
 const todoItems=contextobj.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={styles.message}>&#10084; Enjoy Your Day &#10084;</p>
    )
  );
};

export default Welcome_message;
