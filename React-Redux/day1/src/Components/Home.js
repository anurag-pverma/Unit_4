import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome to Home page</h1>
        <div>Click here for <Link to = "/todos">Todos</Link></div>
    </div>
  )
}

export default Home