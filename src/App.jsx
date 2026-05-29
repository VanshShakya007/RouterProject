import { useState } from 'react'
import React from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import Template from './components/Template'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {

const[isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}setIsLoggedIn={setIsLoggedIn}/>
<Routes>
  <Route path="/" element={<Home/>}/>
 <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />   
  <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} /> 
  <Route path="dashboard" element={<Dashboard/>}/>
</Routes>
    </div>
  )
}
export default App