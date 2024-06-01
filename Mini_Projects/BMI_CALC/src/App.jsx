import { useState } from "react";
import "./styles.css";




 function App() {
 
const [weight, setWeight] = useState("50")
const [Height, setHeight] = useState("150")

const onWeightChange=(e)=>{
  const changeWeight=e.target.value;
  // console.log(changeWeight);
  setWeight(changeWeight)
}
const onHeightChange=(e)=>{
  const changeHeight=e.target.value;
  // console.log(changeHeight);
  setHeight(changeHeight)
}
const totalheight=Height/100
const totalBMI=parseFloat( weight/(totalheight)**2).toFixed(2)
  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight:{weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Height:{Height}  cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{totalBMI}</p>
      </div>
    </main>
  );
}
export default App;