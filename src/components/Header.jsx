import React from 'react'
import avatar_icon from '../assets/avatar-icon.svg'
import notification_icon from '../assets/notification-icon.svg'
import search_icon from '../assets/Search.svg'
import menu_icon from '../assets/icons8-menu.svg'

function Header() {
  return (
    <header className=' flex h-[80px] w-full gap-2 border md:border-red-900  pt-3 px-3
   
    
    '>
        <div className='w-full text-center lg:text-right relative'>
            <div className='absolute top-4 left-2 md:ml-[60px] lg:ml-[360px] inset-x-0 sm:ml-[5rem] flex items-center  '>
                <img src={search_icon} alt="search-icon" />
            </div>
            
            <input className='w-full lg:w-3/5 sm:w-2/3 md:border md:border-red-900   outline-none p-2 pl-10 mt-1 border border-[#D0D5DD] rounded-lg lg:mr-10 ' type="text" placeholder='Search' />
        </div>

        <div className='hidden sm:w-2/4  sm:flex   items-center justify-around gap-1 md:gap-3 lg:w-1/6 mb-4 lg:justify-evenly md:justify-end'>

        <div className=''>
        <img src={notification_icon} alt="notification-icon" />
        </div>
        <div>
        <img src={avatar_icon} alt="" />
        </div>
           
        </div>
        <div className='sm:hidden flex justify-center items-start pt-3  pl-2'>
            <img src={menu_icon} alt="" />
        </div>
    </header>
  )
}

export default Header

// border-[#EAECF0]