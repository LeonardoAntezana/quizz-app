import { React, useState, useEffect } from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { getFirestore, collection, getDocs, getDoc, doc, addDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
import View from '../View/View'
import Question from '../Question/Question'
import { Link } from 'react-router-dom'
import styles from './QuestionsContainer.module.scss'

function QuestionContainer() {
    const {userInfo, setUserInfo} = useQuizzContext()
    const {categorySelected} = useParams()
    const [questions, setQuestions] = useState([])
    const [countQuestion, setCountQuestion] = useState(0)
    const [background, setBackground] = useState('')
    
    const handleClick = () => setCountQuestion(countQuestion + 1)
    
    useEffect(() => {
        const data = getFirestore();
        getDocs(collection(data, categorySelected)).then(res => setQuestions(res.docs.map(elem => ({...elem.data()}))))
        getDoc(doc(data, 'images', categorySelected)).then(res => setBackground(res.data()))
    },[categorySelected])

    useEffect(() => {
      if(countQuestion === 5){
        const data = getFirestore();
        addDoc(collection(data, 'scores'), {...userInfo, endTime: new Date().getTime()})
      }     
    }, [countQuestion])
    
    return (
      <div style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background.fondo})`}} className={styles.questionsContainer}>
          {questions.length === 0 ? <View><TailSpin/></View> : countQuestion !== 5 &&<Question pregn={questions[countQuestion]} sumCount={handleClick}/>}
          {countQuestion === 5 && 
            <View className={styles.score}>
              <p>El score final es: <span>{userInfo.score}</span></p>
              <Link to='/scorelist'>Ir a puntuacion</Link>
            </View>}
      </div>)
      }


export default QuestionContainer