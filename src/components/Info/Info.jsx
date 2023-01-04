import React from 'react'
import { useQuizzContext } from '../../context/QuizzContextProvider'
import View from '../View/View';
import { Link } from 'react-router-dom';
import styles from './Info.module.scss'

function Info() {
    const {userInfo, setUserInfo} = useQuizzContext();

  const handleChange = event => {
    setUserInfo({...userInfo, name: event.target.value,})
  }

  return (
    <View className={styles.info}>
        <h2>Bienvenido, Sr. {userInfo.name}</h2>
        <input className={styles.input} type="text" onChange={handleChange} placeholder='Ingresar nombre' maxLength={15} autoFocus/>
        {userInfo.name && <Link className={`link ${styles.link}`} to='/home'>Siguiente</Link>}
    </View>
  )
}

export default Info