import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Tickets from './pages/Tickets'
import About from './pages/About'
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tickets" element={<Tickets/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App