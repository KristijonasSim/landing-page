import React from 'react'
import logo from './logo.png'
import styles from './logo.module.css'
const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo}></img>
      <h2 className={styles.text}>DEV SPARKLE</h2>
    </div>
  )
}

export default Logo