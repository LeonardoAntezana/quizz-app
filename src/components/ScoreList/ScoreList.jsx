import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import styles from './ScoreList.module.scss'
import { Link } from 'react-router-dom'

function ScoreList() {
  const {userInfo, setUserInfo} = useQuizzContext()
  const handleClick = () => {
    setUserInfo({name: null, score: 0, time: ''})
  }
  return (
    <div className={styles.scoreList}>
        <h1>ScoreList</h1>
        <div className={styles.userScore}>
            <p>Nombre: {userInfo.name}</p>
            <p>Score: {userInfo.score}</p>
            <p>Tiempo: {userInfo.time}</p>
        </div>
        <Link to='/' onClick={handleClick}>Inicio</Link>
    </div>
  )
}

export default ScoreList