import React from 'react'
import logo_icon from '../assets/logo-icon.svg'
import home_icon from '../assets/home-icon.svg'
import recents_icon from '../assets/recents-icon.svg'
import starred_icon from '../assets/starred-icon.svg'
import projects_icon from '../assets/projects-icon.svg'
import support_icon from '../assets/support.svg'
import setting_icon from '../assets/setting-icon.svg'



function Aside() {
  return (
    <div className='hidden  w-8/12 sm:w-[190px] border border-[#ddd] sm:block fixed h-screen ml-[60px] ' >
          <div className='mt-4  h-12  pl-7   md:mt-5 lg:mt-9 xl:mt-7 xl-pl-7'>
      <img src={logo_icon} alt="logo-icon" className='w-full ' />
    </div>
    <ul className='px-4 py-1 pl-6 border-b border-b-[#EAECF0]'>
          <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] cursor-pointer rounded-lg hover:text-[#4A24A1] p-3  '>
              <span>
                  <img src={home_icon} alt="home-icon" />
              </span>
              <span>Home</span>
          </li>
          <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3'>
              <span>
              <img src={recents_icon} alt="recents-icon" />
              </span>
              <span>Recents</span>
          </li>
          <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3 '>
              <span>
                  <img src={starred_icon} alt="starred-icon" />
              </span>
              <span>Starred</span>
          </li>
      </ul>

      <ul className='px-4 py-1 pl-6 '>
            <li className='flex gap-2 mt-3  lg:ml-1 lg:gap-4 hover:bg-[#F0EBFC] cursor-pointer hover:text-[#4A24A1] rounded-lg p-3 '>
               <span>
                   <img src={projects_icon} alt="starred-icon" />
               </span>
               <span>Projects</span>
           </li>
            </ul>

            <ul className=' h-full  px-4 py-1 pl-6 flex flex-col justify-center mt-3'>
           <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3 '>
               <span>
                   <img src={support_icon} alt="support-icon" />
               </span>
               <span>Support</span>
           </li>
           <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3  '>
               <span>
                   <img src={setting_icon} alt="setting-icon" />
               </span>
               <span>Settings</span>
           </li>
       </ul>
    </div>
  )
}

export default Aside