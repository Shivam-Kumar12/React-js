import React, { useState } from "react";
import styles from "./Increment.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Increment = () => {
  const [value, setValue] = useState(0); // Initialize with a numeric value
  const [subval, setSubval] = useState("");
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleSubmit = () => {
    setSubval(value.toString());
  };

  return (
    <div className={styles.Inc}>
      <button onClick={handleIncrement} className={styles.btn}>
        <i className="bi bi-patch-plus"></i>
      </button>
      <input type="number" className={styles.numb} value={value} readOnly />
      <button onClick={handleDecrement} className={styles.btn}>
        <i className="bi bi-patch-minus"></i>
      </button>
      <div className={styles.submit}>
        <button type="submit" className={styles.btn1} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className={styles.result}>
        {/* Display the value on the screen */}
        <p>Submitted Value: {subval}</p>
      </div>
    </div>
  );
};

export default Increment;
