import React from 'react'
import styles from './button_login.module.css'
const LoginButton = ({ text }) => {
  return (
    <div className={styles.labas}>
      <div className={styles.button_login}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default LoginButton