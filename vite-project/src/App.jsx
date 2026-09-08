import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './components/Icard'
function App() {
  

  return (
    <>
    <div style={{border:'2px solid grey',width:'1000px', height:'600px'}}>
      <h1 style={{color:'brown'}}>ABES Engineering college</h1>
      <h3 style={{color:'black',background:'grey'}}>NAME        :      Sanskar Pandey</h3>
      <h3 style={{color:'black',background:'grey'}}>Roll No.    :      2400320100984</h3>
      <h3 style={{color:'black',background:'grey'}}>branch      :      CSE</h3>
      <h3 style={{color:'black',background:'grey'}}>section     :      cse-24</h3>
      <h3 style={{color:'black',background:'grey'}}>skills      :      HTML CSS JAVASCRIPT REACT</h3>
    </div>
      
    </>
  )
}

export default App
