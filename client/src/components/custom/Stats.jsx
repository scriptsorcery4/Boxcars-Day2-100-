import React from 'react'

function Stats({title, des}) {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <h3 className='font-bold text-[38px]'>{title}</h3>
        <p className='text-[15px]'>{des}</p>
    </div>
  )
}

export default Stats