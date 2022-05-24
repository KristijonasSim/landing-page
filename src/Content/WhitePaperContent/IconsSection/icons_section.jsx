import React from 'react'
import styles from './icons_section.module.css'
import hands from '../../../data/Images/hands.jpeg'
import integrations from '../../../data/Images/integrations.jpeg'
import scale from '../../../data/Images/scale.jpeg'
const IcocnsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
      <div className={styles.single_container}>
          <img src={hands} alt="" className={styles.image}/>
         <h3>Award-winning support</h3>
         <p> Get the help you need, whenever you need it with our 24/7 support.</p>
      </div>
      <div className={styles.single_container}>
          <img src={integrations} alt="" className={styles.image}/>
        <h3>250+ app integrations</h3>
         <p> You can connect your tools to Mailchimp and unlock even more features.</p>
      </div>
      <div className={styles.single_container}>
          <img src={scale} alt="" className={styles.image}/>
         <h3>A directory of trusted pros</h3>
         <p> Take your marketing to the next level when you work with a Mailchimp partner.</p>
      </div>
    </div>
  </div>

  )
}

export default IcocnsSection