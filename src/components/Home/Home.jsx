import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    
  return (
    <div>
       <h3>Elige una categoria</h3>
        <div>
            <Link to='/category/videogames'>Videojuegos</Link>
            <Link to='/category/football'>Futbol</Link>
        </div>
    </div>
  )
}

export default Home