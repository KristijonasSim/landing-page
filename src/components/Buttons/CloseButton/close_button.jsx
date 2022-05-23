import React from 'react'
import { useGlobalContext } from '../../context/context';
import  styles from './close_button.module.css'
import { MdOutlineClose } from 'react-icons/md';

const CloseButton = () => {
  const {closeSidebar } = useGlobalContext()
  return (
      <button onClick={closeSidebar} className={styles.closeButton}><MdOutlineClose size={35}/></button>
  )
}

export default CloseButton