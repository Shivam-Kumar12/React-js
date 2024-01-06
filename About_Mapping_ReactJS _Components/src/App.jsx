import React from "react";
import "./App.css";
import FoodItem from "./components/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // Methods like if and  "&&" and Ternary operator and Logical operator
  // let foodItem   s = [];
  let foodItems =['Sabzi','Fish','Green Vegetables','Yogurt','Fruits','Ghee','Dahi']

  // if (foodItems.length===0){
  //   return <h3>I am still hungry </h3>
  // }

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry </h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      <ErrorMessage  items={foodItems}/>
      <FoodItem  items={foodItems}/>
     
    </>
  );
}
export default App;
