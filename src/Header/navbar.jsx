import React  from 'react'
import LoginButton from '../components/Buttons/LoginButton/button_login.'
import SignInButton from '../components/Buttons/SignUpButton/button_sign.'
import data from '../data/links/links'
import Logo from '../components/logo/logo'
import { useGlobalContext } from '../components/context/context'
import Links from './links/links'
import styles from './navbar.module.css'
import { FaBars } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  const { openSidebar } = useGlobalContext()


  return (
    <div className={styles.navbar}>
        <div className={styles.bars} onClick={openSidebar}>
            <FaBars size={25}/>
        </div>
        <div className={styles.links}>
            {data.map((link) => {
              const { id, text } = link
              return( 
                <Links
                    key={id}
                    content={text}
                />
              )
            })}
        </div>
          <Logo/>
        <div className={styles.buttons}>
          <div className={styles.search}>
            <FaSearch/>
          </div>
        <LoginButton text="Log In"/>
        <SignInButton text="Sign Up Free"/>
        </div>

    </div>
  )
}

export default Header