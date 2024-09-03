import React from 'react'
import figma_1 from '../assets/figma-icon-1.svg'
import figma_2 from '../assets/figma-icon-2.svg'
import linkedn from '../assets/linkedn.svg'
import '../index.css'

function Sidebar() {
  return (
    <div className='hidden sm:grid grid-cols-[68px] '>
        <ul className='pt-5 lg:pt-7 list-none flex flex-col p-3 gap-6 col-span-1 bg-[#5F2ECF] h-screen fixed'>
            <li className=''>
            <img src={linkedn} alt="linkedn-icon-1" />
            </li> 
            <li>
                <img src={figma_2} alt="figma-icon-1" />
            </li>
            <li>
                <img src={figma_2} alt="figma-icon-1" />
            </li>
            <li>
            <img src={figma_1} alt="figma-icon-1" />
            </li>
            
           
        </ul>
    </div>
  )
}

export default Sidebar