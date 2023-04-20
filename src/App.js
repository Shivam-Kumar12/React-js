import React from 'react';
import logo from './logo.svg'
import Header from './Header';
import Home from './Home';
import Event from './Event';
import About from './About';
import Contact from './Certificate';
import Footer from './Footer';

const App = ()=>{
  return(
    <div>
        <Header/>
        <Home/>
        <About/>
        <Event/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;