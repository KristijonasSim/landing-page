import React from 'react'
import styles from './businesses_section.module.css'
import spotify from '../../../data/Images/spotify.png'
import instagram from '../../../data/Images/instagram.png'
import airbnb from '../../../data/Images/airbnb.png'
import iqos from '../../../data/Images/iqos.png'

const businesses_section = () => {
  return (
    <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.header}>
            <h4>12 million businesses rely on Dev Sparkle:</h4>
          </div>
          <div className={styles.businesses_icons}>
              <img src={spotify} className={styles.logo}/>
              <img src={instagram} className={styles.logo}/>
              <img src={airbnb} className={styles.logo}/>
              <img src={iqos} className={styles.logo}/>
          </div>
          <div className={styles.sign}>
            <h2>Get started for free</h2>
            <button className={styles.button}>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default businesses_section