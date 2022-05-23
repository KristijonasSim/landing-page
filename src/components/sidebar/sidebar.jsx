import React from 'react'
import { useGlobalContext } from '../context/context'
import './sidebar.css'
import CloseButton from '../../components/Buttons/CloseButton/close_button';
import { MdLanguage } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';

import data from '../../data/links/links'
import Links from '../../Header/links/links';
const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext()


  return (
    <div 
        className={`${isSidebarOpen ? 'sidebar_wrapper show' : 'sidebar_wrapper'
    }`}
    >
     <div className='inner_sidebar'>
       <div className='inner_sidebar_header'>
         <div>
            <CloseButton/>
         </div>
          <div>
            <MdLanguage size={30} className='inner_sidebar_header_icons'/>
            <FaSearch size={25} className='inner_sidebar_header_icons'/>
          </div>
       </div>
        {data.map((link) => {
          const { id, text } = link
            return(
              <div className='links_display'>
                <Links 
                key={id}
                content={text}
              />
              <MdKeyboardArrowRight size={25}/>
              </div>

             
            )})}
            <div className='inner_sidebar_footer'>
                <h4>Product Updates</h4>
                <p>Get the latest on new features, product improvements, and other announcements.</p>
                <button className='follow_link'>See what new <MdArrowForward/>
                </button>
                <div className='divider'></div>
                <div className='buttons_display'>
                  <button className='logIn_button'>Log In</button>
                  <button className='signIn_button'>Sign Up Free</button>

                </div>
            </div>

        </div>

     </div>
  )
}

export default Sidebar