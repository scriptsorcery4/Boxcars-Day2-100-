import React from 'react'

function BenfCard({img, title, des}) {
  return (
    <div className='flex flex-col gap-[20px] font-sans'>
        <img className='h-[60px] w-fit' src={img} alt="" />
        <p className='font-medium text-[20px] leading-[24px]'>{title}</p>    
        <p className='w-[314px] leading-[27px] text-[15px]'>{des}</p>
    </div>
  )
}

export default BenfCard