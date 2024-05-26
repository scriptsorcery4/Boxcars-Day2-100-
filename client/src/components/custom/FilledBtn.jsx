import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function FilledBtn({children, col}) {
  return (
    <div className={`flex font-sans items-center gap-[10px] pt-[15px] pb-[18px] px-[20px] ${col === 'blue' ? 'bg-[#405FF2]' : 'bg-[#050B20]' } rounded-[12px] w-fit hover:bg-transparent hover:text-black text-white border-black border transition-colors cursor-pointer`}>
        <p className='font-medium text-[15px]'>{children}</p>
        <GoArrowUpRight  size={20} />
    </div>
  )
}

export default FilledBtn