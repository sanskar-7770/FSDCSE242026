import React from 'react'

function Icard(data) {
  return (
    <div>
      <h2>College:{data.College}</h2>
      <img src={data.pic} height={200} width={200}></img>
      <h2>Roll: {data.Roll}</h2>
      <h2>Name:{data.Name}</h2>
      <h2>branch:{data.branch}</h2>
    </div>
  )
}

export default Icard