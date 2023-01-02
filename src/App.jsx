import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuestionContainer from './components/QuestionsContainer/QuestionContainer'
import Info from './components/Info/Info'
import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Info/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='category/:categorySelected' element={<QuestionContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
