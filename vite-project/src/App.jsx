import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './components/Icard'
import Icardgallery from './components/Icardgallery'
import MyState from './components/mystate'

import SetName from './components/SetName'
import ColorChange from './components/Colorchange'
import ImageManipulation from './components/ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import FetchProducts from './components/FetchProducts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
function App() {
  

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          
        </Routes>
        </BrowserRouter>
      </div>
   
      
   
  )
}


export default App
