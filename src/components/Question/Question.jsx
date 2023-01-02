import React from 'react'

function Question({pregn, sumCount}) {
    const {question, options} = pregn
  return (
    <div>
        <h3>{question}</h3>
        <div>
            {options.map((option, index) => <button key={index} onClick={sumCount}>{option}</button>)}
        </div>
    </div>
  )
}

export default Question