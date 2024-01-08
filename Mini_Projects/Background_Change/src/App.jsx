import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [color,setColor]=useState("#ADD8E6")
 return(
<div className="App" style={{backgroundColor:color}}>
  <div className="container">
  <button type="button" class="btn btn-primary blue" onClick={()=>setColor("Dodgerblue")} >DodgerBlue</button>
<button type="button" class="btn btn-secondary grey"onClick={()=>setColor("Grey")}>Grey</button>
<button type="button" class="btn btn-success green"onClick={()=>setColor("Green")}>Green</button>
<button type="button" class="btn btn-danger red"onClick={()=>setColor("Red")}>Red</button>
<button type="button" class="btn btn-warning yellow"onClick={()=>setColor("Yellow")}>Yellow</button>
<button type="button" class="btn btn-info sky"onClick={()=>setColor("#0ddaf6")}>Alice Blue</button>
<button type="button" class="btn btn-light white"onClick={()=>setColor("White")}>white
</button>
<button type="button" class="btn btn-dark black"onClick={()=>setColor("Black")}>Black</button>
  </div>
</div>
 );
}
export default App 
