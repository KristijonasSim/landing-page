import React from 'react'
import styles from './content.module.css'
import ContentHeroText from './ContentHeroText/content.hero.text'
import ContentHeroImage from './ContentHeroImage/content.hero.image'
const Content = ( ) => {
  return (
    <div className={styles.content_container}>
        <div className={styles.layout}>
          <div className={styles.hero_content}>
              <div className={styles.hero_text}>
                <ContentHeroText/>
              </div>
              <div className={styles.hero_logo}>
                  <ContentHeroImage/>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Content