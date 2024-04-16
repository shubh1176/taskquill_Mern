import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SignIn from './pages/SignIn.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import FooterCom from './components/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/sign-in" element = {<SignIn/>} />
        <Route path="/sign-up" element = {<SignUp/>} />
        <Route path="/Dashboard" element = {<Dashboard/>} />
        <Route path="/projects" element = {<Projects/>} />
    
      </Routes>
      <FooterCom />


    </BrowserRouter>
  )
}
