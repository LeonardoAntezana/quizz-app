import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizzContextProvider from './context/QuizzContextProvider'
import App from './App'
import './firebase/config'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizzContextProvider>
      <App />
    </QuizzContextProvider>
  </React.StrictMode>,
)
