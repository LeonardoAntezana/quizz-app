import React from 'react'
import styles from './View.module.scss'

function View({ className, children }) {
  return (
    <div className={`${className} ${styles.view}`}>{children}</div>
  )
}

export default View