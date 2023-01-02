import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'

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
    <div>
        <h3>{question}</h3>
        <div>
            {options.map((option, index) => <button key={index} onClick={() => handleclick(option)}>{option}</button>)}
        </div>
    </div>
  )
}

export default Question