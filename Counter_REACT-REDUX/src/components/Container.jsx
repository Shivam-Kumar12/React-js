import React from 'react'
import {useSelector } from "react-redux";
const Container = ({children}) => {
  const privacyState = useSelector((store) => store.privacy);

  return (
    <div>
      <div className="card" style={{ backgroundColor: privacyState ? "lightblue" : "white" }}>

  <div className="card-body">
   {children}
  </div>
</div>
    </div>
  )
}

export default Container
