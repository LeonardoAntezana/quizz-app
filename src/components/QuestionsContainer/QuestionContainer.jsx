import { React, useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Question from '../Question/Question'

function QuestionContainer() {
    const {categorySelected} = useParams()
    const [questions, setQuestions] = useState([])
    const [countQuestion, setCountQuestion] = useState(0)

    const handleClick = () => setCountQuestion(countQuestion + 1)
    useEffect(() => {
        const data = getFirestore();
        getDocs(collection(data, categorySelected)).then(res => setQuestions(res.docs.map(elem => ({...elem.data()}))))
    },[categorySelected])
  return (
    <div>
        {questions.length !== 0 && <Question pregn={questions[countQuestion]} sumCount={handleClick}/>}
    </div>
  )
}

export default QuestionContainer