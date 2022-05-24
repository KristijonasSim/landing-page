import React from 'react'
import styles from './content.hero.text.module.css'
const ContentHeroText = () => {
  return (
    <div className={styles.text_container}>
        <h1>Do it all with Dev Sparkle</h1>
        <h4>With Dev Sparkle, you get the tools you need to sell your products, reach new customers, and take your business to the next level.</h4>
        <div>
              <button className={styles.text_button}>Sign Up</button>
        </div>
    </div>
  )
}

export default ContentHeroText