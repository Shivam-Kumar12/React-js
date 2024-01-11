import { useRef, useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const TodoNameElement = useRef();
  const dueDateElement = useRef();
  const {addNewItem} = useContext(TodoItemsContext)


  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noofUpdate.current+=1
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   noofUpdate.current+=1
  //   console.log(`noofUpdates"${noofUpdate.current}`)

  // };
  const handleAddButtonclicked = (e) => {
    e.preventDefault();
    console.log(e);
    const TodoName = TodoNameElement.current.value;
    const dueDate = dueDateElement.current.value ;
    TodoNameElement.current.value=""    
    dueDateElement.current.value=""    
    addNewItem(TodoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row custom-row" onSubmit={handleAddButtonclicked}>
        <div className="col-6">
          <input
            type="text"
            ref={TodoNameElement}
            placeholder="Enter ToDo  Item"
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2 ">
          <button className="btn btn-success custom-btn">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
