import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function GhostBtn({children}) {
  return (
    <div className={`flex font-sans items-center gap-[10px] pt-[15px] pb-[18px] px-[20px] border bg-transparent border-white rounded-[12px] w-fit text-white hover:bg-white hover:text-black transition-colors cursor-pointer`}>
        <p className='font-medium text-[15px]'>{children}</p>
        <GoArrowUpRight size={20} />
    </div>
  )
}

export default GhostBtn