import React from 'react'
import {useState} from 'react';
function SetName(){
    const [name,setName]=useState("sanskar")
    const[clgname,setClg]=useState("abes");
    function updatename(){
        setName("sanskar pandey");
        
        
    }
    function updateclg(){
            setClg('abes engineering college');
        }

    return (
    <div>
        <h2>Name:{name}</h2>
        <h2>College Name: {clgname}</h2>
        <button onClick={updatename}>update name</button>
        <button onClick={updateclg}>update clg</button>
    </div>
  )
}

export default SetName;
