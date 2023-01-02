import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import { Link } from 'react-router-dom';

function Info() {
    const {userInfo, setUserInfo} = useQuizzContext();

  const handleChange = event => {
    setUserInfo({...userInfo, name: event.target.value,})
  }

  return (
    <div>
        <h3>Bienvenido, Sr. {userInfo.name}!</h3>
        <input type="text" onChange={handleChange}/>
        {userInfo.name && <Link to='/home'>Siguiente</Link>}
    </div>
  )
}

export default Info