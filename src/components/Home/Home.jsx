import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import View from '../View/View'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

function Home() {
  const {setUserInfo} = useQuizzContext() 
  const handleClick = () => {
    setUserInfo(state => ({...state, time: new Date().getTime()}))}
  return (
    <View className={styles.home}>
       <h1>Elige una categoria</h1>
        <div className={styles.container__buttons}>
            <Link to='/category/videogames' onClick={handleClick}>Videojuegos</Link>
            <Link to='/category/football' onClick={handleClick}>Futbol</Link>
        </div>
    </View>
  )
}

export default Home