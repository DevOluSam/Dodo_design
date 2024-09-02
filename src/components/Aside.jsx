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
    // <div className='hidden fixed md:grid grid-cols-[200px] lg:grid-cols-[200px] grid-rows-12 h-screen border border-b-[#EAECF0] pr-1'>
    //     <div className='mt-5 col-span-1 row-span-1 h-11  pl-5 lg:mt-6 '>
    //         <img src={logo_icon} alt="logo-icon" className='w-full' />
    //     </div>
    //     <ul className=' lg:gap-0 justify-center lg:ml-1 row-span-3 col-span-1 flex flex-col gap-0 border-b border-b-[#EAECF0] lg:text-lg lg:justify-end lg:pb-4 p-4 border border-red-700 '>
    //         <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] cursor-pointer rounded-lg hover:text-[#4A24A1] p-3  '>
    //             <span>
    //                 <img src={home_icon} alt="home-icon" />
    //             </span>
    //             <span>Home</span>
    //         </li>
    //         <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3'>
    //             <span>
    //             <img src={recents_icon} alt="recents-icon" />
    //             </span>
    //             <span>Recents</span>
    //         </li>
    //         <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3 '>
    //             <span>
    //                 <img src={starred_icon} alt="starred-icon" />
    //             </span>
    //             <span>Starred</span>
    //         </li>
    //     </ul>
    //          <ul className='p-3 pl-4 '>
    //          <li className='flex gap-2 mt-3  lg:ml-1 lg:gap-4 hover:bg-[#F0EBFC] cursor-pointer hover:text-[#4A24A1] rounded-lg p-3 '>
    //             <span>
    //                 <img src={projects_icon} alt="starred-icon" />
    //             </span>
    //             <span>Projects</span>
    //         </li>
    //          </ul>
    //         <ul className='flex flex-col col-span-1 row-start-11 mt-2 p-3'>
    //             <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3 ml-2 lg:ml-1 '>
    //                 <span>
    //                     <img src={support_icon} alt="support-icon" />
    //                 </span>
    //                 <span>Support</span>
    //             </li>
    //             <li className='flex gap-2 lg:gap-4 hover:bg-[#F0EBFC] hover:text-[#4A24A1] cursor-pointer rounded-lg p-3 ml-2 lg:ml-1 '>
    //                 <span>
    //                     <img src={setting_icon} alt="setting-icon" />
    //                 </span>
    //                 <span>Settings</span>
    //             </li>
    //         </ul>
    // </div>
    <div className='hidden border border-[#EAECF0] w-8/12 md:w-[190px] sm:block md:fixed h-screen ml-[60px]' >
          <div className='mt-4  h-11  pl-7 lg:pl-6  md:mt-5 lg:mt-9 '>
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

            <ul className='mt-[280px] px-4 py-1 pl-6'>
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