import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import Controll from './components/Controll'
import Privacymessage from './components/Privacymessage'
import {useSelector} from "react-redux";
function App() {

const privacy=useSelector(store => store.privacy)
  return (
      <div className="px-4 py-5 my-5 text-center">
        <Container>
       <Header/>
        <div className="col-lg-6 mx-auto">
          {privacy?<Privacymessage/>:<DisplayCounter/>}
          <Controll/>
        </div>
        </Container>
      </div>   
  )
}

export default App
