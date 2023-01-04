import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import styles from './ScoreList.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ScoreList() {
  const {setUserInfo} = useQuizzContext()
  const [listScores, setListScores] = useState([])
  useEffect(() => {
    setUserInfo({name: null, score: 0, time: ''})
    const data = getFirestore()
    getDocs(collection(data, 'scores')).then(res => setListScores(res.docs.map(score => ({...score.data()})).sort((a, b) => b.score - a.score)))
  },[])
  return (
    <div className={styles.scoreList}>
        <h1>ScoreList</h1>
        {listScores.length !== 0 && listScores.map((score, index) => (
            <div key={index} className={styles.userScore}>
            <p className={styles.name}>Nombre: {score.name}</p>
            <p>Score: {score.score}</p>
            <p>Tiempo: {score.time}</p>
        </div>
        ))}
        <Link className={styles.inicio} to='/'>Inicio</Link>
    </div>
  )
}

export default ScoreList