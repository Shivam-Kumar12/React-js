import React from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Event />} />
        <Route path="/blog" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App