import { React, useState, useEffect } from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Question from '../Question/Question'
import { Link } from 'react-router-dom'

function QuestionContainer() {
    const {userInfo, setUserInfo} = useQuizzContext()
    const {categorySelected} = useParams()
    const [questions, setQuestions] = useState([])
    const [countQuestion, setCountQuestion] = useState(0)
    
    const handleClick = () => setCountQuestion(countQuestion + 1)
    
    useEffect(() => {
        const data = getFirestore();
        getDocs(collection(data, categorySelected)).then(res => setQuestions(res.docs.map(elem => ({...elem.data()}))))
    },[categorySelected])

    useEffect(() => {
      if(countQuestion === 5){
        setUserInfo(state => ({
          ...state,
          time: new Date().getSeconds() - state.time,
        }))
      }     
    }, [countQuestion])
    
    return (
      <div>
          {questions.length !== 0 && countQuestion !== 5 &&<Question pregn={questions[countQuestion]} sumCount={handleClick}/>}
          {countQuestion === 5 && 
            <div>
              <p>El score final es: {userInfo.score}</p>
              <Link to='/scorelist'>Ir a puntuacion</Link>
            </div>}
      </div>)
      }


export default QuestionContainer