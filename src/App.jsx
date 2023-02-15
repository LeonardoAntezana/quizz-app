import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionContainer from './pages/QuestionsContainer/QuestionContainer'
import Info from './pages/Info/Info'
import Home from './pages/Home/Home'
import ScoreList from './pages/ScoreList/ScoreList'
import styles from './App.module.scss'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path='/' element={<Info/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='category/:categorySelected' element={<QuestionContainer/>}/>
          <Route exact path='/scorelist' element={<ScoreList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
