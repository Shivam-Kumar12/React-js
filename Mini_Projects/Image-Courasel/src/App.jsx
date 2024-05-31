import React from 'react'
import { useState } from 'react';

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",

  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/355423/pexels-photo-355423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2&w=200"
];
const App = () => {
 const [currentIndex, setcurrentIndex] = useState(0)

 const prevSlide=()=>{
  setcurrentIndex((prevIndex)=>(prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  console.log(currentIndex);
 }
 const nextSlide=()=>{
  setcurrentIndex(((prevIndex)=>prevIndex === images.length-1?0 : prevIndex + 1))
  console.log(currentIndex);

 }
  return (
    <div className="slider">
    <div className="left-arrow" onClick={prevSlide} >
    ⬅
    </div>
    <div className="image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    <div className="right-arrow"  onClick={nextSlide}>
    ⮕
    </div>
    </div>
    

  )
}

export default App