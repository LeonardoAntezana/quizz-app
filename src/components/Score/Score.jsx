import React from 'react'
import { parseTime } from '../../utilities/utilities'
import styles from './Score.module.scss'

function Score({scoreItem}) {
  const {name, score, time, endTime} = scoreItem
  console.log(endTime - time)
  return (
    <div className={styles.userScore}>
        <p className={styles.name}>Nombre: {name}</p>
        <p>Score: {score}</p>
        <p>Tiempo: {parseTime(time, endTime)}</p>
    </div>
  )
}

export default Score