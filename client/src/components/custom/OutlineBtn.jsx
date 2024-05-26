import React from 'react'

function OutlineBtn({children}) {
  return (
    <button className='font-sans font-medium text-[15px] px-[25px] py-[10px] text-[#050B20] border border-[#050B20] rounded-[15px]'>{children}</button>
  )
}

export default OutlineBtn