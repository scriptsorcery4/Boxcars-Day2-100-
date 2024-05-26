import React from 'react'

function TypeCar({img , title}) {
  return (
    <div className='flex flex-col gap-[10px] items-center'>
        <img className='h-[150px] w-[200px]' src={img} alt="" />
        <p className='font-sans font-medium text-[18px] leading-[22px] text-center'>{title}</p>
    </div>
  )
}

export default TypeCar