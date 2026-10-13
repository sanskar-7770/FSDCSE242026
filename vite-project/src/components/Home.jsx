import React from 'react'

function Home() {
  return (
    <div>
        <h2>Home</h2>
    <nav>
        <ul>
            <li>
                <Link to="/login"></Link> 
            </li>
            <li>
                <Link to="/register">Registration</Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Home