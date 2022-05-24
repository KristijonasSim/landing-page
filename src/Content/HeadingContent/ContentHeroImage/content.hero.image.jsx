import React from 'react'
import styles from './content.hero.module.css'
import envelope from '../../../data/Images/envelope.png'
import phone from '../../../data/Images/phone.png'
import calendar from '../../../data/Images/calendar.png'
import target from '../../../data/Images/target.png'

const ContentHeroImage = () => {
  return (

    <div className={styles.image_container}>
      <div className={styles.image_inner_container}>
            <img src={envelope} alt="" className={styles.envelope} />
            <img src={phone} alt="" className={styles.phone} />
            <img src={calendar} alt="" className={styles.calendar} />
            <img src={target} alt="" className={styles.target} />
        </div>
    </div>

  )
}

export default ContentHeroImage