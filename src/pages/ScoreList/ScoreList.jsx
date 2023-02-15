import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import View from '../../components/View/View'
import Score from '../../components/Score/Score'
import { TailSpin } from 'react-loader-spinner'
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
  if(listScores.length !== 0){
  return (
    <div className={styles.scoreList}>
        <h1>ScoreList</h1>
        {listScores.map((score, index) => (
          <Score key={index} scoreItem={score}/>
        ))}
        <Link className={styles.inicio} to='/'>Inicio</Link>
    </div>
  )}
  return (
    <View><TailSpin/></View>
  )
}

export default ScoreList