import React from 'react'
import avatar_icon from '../assets/avatar-icon.svg'
import notification_icon from '../assets/notification-icon.svg'
import menu_icon from '../assets/icons8-menu.svg'

function Header() {
  return (
    <header className='sm:border-0 flex h-[50px] w-full gap-2   pt-3 px-3   
    '>
        <form className='rounded-lg relative w-full h-full  lg:w-1/3 ml-auto'>
          <input type="text" className='w-full h-full  outline-none p-2 pl-10 mt-1 border border-[#D0D5DD] rounded-lg  '  placeholder='Search' />
          <button className='absolute top-[0.4rem] left-1 w-[30px] h-full rounded-[50%] cursor-pointer border-0 text-xl'>
               <i class="bx bx-search" aria-hidden="true"></i>
            </button>
        </form>

        <div className='hidden sm:w-2/4  sm:flex   items-center justify-around gap-1 md:gap-3 lg:w-1/6 mb-4 lg:justify-evenly md:justify-end mt-4'>

        <div className=''>
        <img src={notification_icon} alt="notification-icon" />
        </div>
        <div>
        <img src={avatar_icon} alt="" />
        </div>
           
        </div>
        <div className='sm:hidden flex justify-center items-start pt-2  pl-2 cursor-pointer'>
            <img src={menu_icon} alt="" />
        </div>
    </header>
  )
}

export default Header
