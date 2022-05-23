import React from 'react'
import styles from './button_sign.module.css'
const SignInButton = ({ text }) => {
  return (
    <div className={styles.button_sign}>
      <p>{text}</p>
    </div>
  )
}

export default SignInButton