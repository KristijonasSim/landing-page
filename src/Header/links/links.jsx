import React from 'react'
import styles from './links.module.css'
const Links = ({ content }) => {

  return (
    <div className={styles.links}>
      {<p>{content}</p>}
    </div>
  )
}

export default Links