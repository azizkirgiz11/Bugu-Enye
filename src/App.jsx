import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Tickets from './pages/Tickets'
import About from './pages/About'
import Home from './pages/Home';
import BuyTicket from './pages/BuyTicket';
import ScrollToTop from './components/ScrollToTop';
import { CssBaseline } from '@mui/material';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tickets" element={<Tickets/>} />
        <Route path="/buy-ticket" element={<BuyTicket/>} />
      </Routes>
      <BackToTop />
      <Footer/>
    </div>
  )
}

export default App