import { createContext, useContext, useState } from 'react'

const ContextQuizz = createContext([])

export const useQuizzContext = () => useContext(ContextQuizz)

function QuizzContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({name: null, score: 0, time: ''})  
  return (
    <ContextQuizz.Provider value={{userInfo, setUserInfo}}>
        {children}
    </ContextQuizz.Provider>
  )
}

export default QuizzContextProvider