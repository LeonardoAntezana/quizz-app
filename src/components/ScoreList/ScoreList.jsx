import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'

function ScoreList() {
    const {userInfo} = useQuizzContext()
  return (
    <div>
        <div>
            <p>{userInfo.name}</p>
            <p>Score: {userInfo.score}</p>
            <p>Tiempo: {userInfo.time}</p>
        </div>
    </div>
  )
}

export default ScoreList