import React from 'react'
import img1 from '../assets/card1.png'
import img2 from '../assets/card2.png'
import img3 from '../assets/card3.png'
import ArrowBtn from './custom/ArrowBtn'

function Card({car, img}) {
  return (
    <div className='flex flex-col font-sans rounded-[16px] border w-[328px]'>
        <div className='relative'>
            <img className='rounded-t-[16px]' src={img} alt="" />
        </div>
        <div className='flex flex-col gap-[5px] p-[30px]'>
            <h3 className='font-medium leading-[22px] text-[18px]'>{car.title}</h3>
            <p className='text-[14px]'>{car.des}</p>
            <div className='flex justify-between py-[15px] border-t border-b'>
                <div className='flex flex-col gap-[12px] items-center'>
                    <img  className='w-[18px]' src={img1} alt="" />
                    <p className='text-[14px]'>{car.mil}</p>
                </div>
                <div className='flex flex-col gap-[12px] items-center'>
                    <img  className='w-[18px]' src={img2} alt="" />
                    <p className='text-[14px]'>{car.ful}</p>
                </div>
                <div className='flex flex-col gap-[12px] items-center'>
                    <img  className='w-[18px]' src={img3} alt="" />
                    <p className='text-[14px]'>{car.m}</p>
                </div>
                
            </div>
            <div className='mt-[20px] flex justify-between'>
                <p className='text-[20px] font-bold'>$15,000</p>
                <ArrowBtn>View Details</ArrowBtn>
            </div>
        </div>
    </div>
  )
}

export default Card