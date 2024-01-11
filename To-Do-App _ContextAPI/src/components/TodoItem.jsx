import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function   TodoItem({ todoName, todoDate }) {
  const {DeleteItem} = useContext(TodoItemsContext)

  return (
    <div className="container ">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className=" btn-danger btn custom-btn row-btn" onClick={()=>DeleteItem(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
