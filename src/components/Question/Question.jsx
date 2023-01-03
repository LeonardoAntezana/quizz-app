import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import View from '../View/View'
import styles from './Question.module.scss'

function Question({pregn, sumCount}) {
    const {setUserInfo} = useQuizzContext()
    const {question, options, answerCorrect} = pregn
    const handleclick = valueOption => {
      if(valueOption === answerCorrect){
        setUserInfo(state => ({...state, score: state.score + 1,}))
        }
      sumCount()
    }
  return (
    <View className={styles.question}>
        <h1>{question}</h1>
        <div className={styles.container__options}>
            {options.map((option, index) => <button key={index} onClick={() => handleclick(option)}>{option}</button>)}
        </div>
    </View>
  )
}

export default Question