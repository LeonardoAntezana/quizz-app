import { createContext, useContext, useState } from 'react'

const ContextQuizz = createContext([])

export const useQuizzContext = () => useContext(ContextQuizz)

function QuizzContextProvider({children}) {
    const [answers, setAnswers] = useState([])

    const addAnswer = (answer, fn) => {
        setAnswers([...answers, answer])
        fn()
    }
  return (
    <ContextQuizz.Provider value={{addAnswer}}>
        {children}
    </ContextQuizz.Provider>
  )
}

export default QuizzContextProvider