import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import Welcome_message from "./components/Welcome_message";
import styles from "./components/Welcome_message.module.css";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "Study",
  //     dueDate: "07-02/2024",
  //   },
  //   {
  //     name: "Reading",
  //     dueDate: "07-02/2024",
  //   },
  //   {
  //     name: "Writing",
  //     dueDate: "07-02/2024",
  //   },
  //   {
  //     name: "Dancing",
  //     dueDate: "07-02/2024",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const [showItemMessage, setShowItemMessage] = useState(false);

  const addNewItem = (itemName, itemDueDate) => {
    if (!itemName) {
      // If itemName is empty, show the add item message
      setShowItemMessage(true);
      // Hide the message after 3 seconds (adjust as needed)
      setTimeout(() => setShowItemMessage(false), 2000);
      return;
    }
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
    setShowItemMessage(false);
  };

  const DeleteItem = (todoItemName) => {
    console.log(`item Deleted: ${todoItemName}`);
    const deletedItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(deletedItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        DeleteItem: DeleteItem,
      }}
    >
      <center className="todo-container"> 
        <AppName />
        <AddTodo />
        {showItemMessage && (
          <p className={styles.message}>Please add new item first.</p>
        )}
        <Welcome_message />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
