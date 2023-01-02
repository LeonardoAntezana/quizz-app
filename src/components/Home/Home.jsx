import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { Link } from 'react-router-dom'

function Home() {
  const {setUserInfo} = useQuizzContext() 
  const handleClick = () => {
    setUserInfo(state => ({...state, time: new Date().getSeconds()}))}
  return (
    <div>
       <h3>Elige una categoria</h3>
        <div>
            <Link to='/category/videogames' onClick={handleClick}>Videojuegos</Link>
            <Link to='/category/football' onClick={handleClick}>Futbol</Link>
        </div>
    </div>
  )
}

export default Home