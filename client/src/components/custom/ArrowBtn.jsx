import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function ArrowBtn({children}) {
  return (
    <div className='flex font-sans items-center gap-[10px] text-[#405FF2]'>
        <p className='font-medium text-[15px] '>{children}</p>
        <GoArrowUpRight size={20} />
    </div>
  )
}

export default ArrowBtn