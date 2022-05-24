import React from 'react'
import styles from './head_liner.module.css'
const HeadLiner = () => {
  return (
    <section className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.text}>
              <h1> Why Dev Sparkle?</h1>
              <p>We’re built for growing businesses. Put our marketing and sales tools behind your idea, dream, brand, or business and we’ll help you share it with the world.</p>
            </div>
            
        </div>
    </section>
  )
}

export default HeadLiner