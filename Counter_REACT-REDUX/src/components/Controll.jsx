import React, { useRef } from "react";
import { useDispatch,useSelector} from "react-redux";

const Controll = () => {
  const dispatch = useDispatch();
  const inputElement=useRef()
  const handleIncerement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecerement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = ()=>{
    dispatch({
        type:"ADD",
        payload:{
            num:inputElement.current.value,
        },
    })
    inputElement.current.value=""
  }
  const handleSubtract = ()=>{
    dispatch({
        type:"SUBTRACT",
        payload:{
            num:inputElement.current.value,
        },
    })
    inputElement.current.value=""

  }
  const handlePrivacyToggle =()=>{
    dispatch({type:"PRIVACY_TOGGLE"})
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncerement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecerement}
        >
          -1
        </button>
        
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-22 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button
          type="button"
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}>
        Subtract
        </button>
      </div>
    </>
  );
};

export default Controll;
