import { createContext, useContext, useState } from 'react'

const ContextQuizz = createContext([])

export const useQuizzContext = () => useContext(ContextQuizz)

function QuizzContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({name: null, score: 0, time: ''})
  const [listScores, setListScores] = useState([])  
  return (
    <ContextQuizz.Provider value={{userInfo, setUserInfo, listScores, setListScores}}>
        {children}
    </ContextQuizz.Provider>
  )
}

export default QuizzContextProvider