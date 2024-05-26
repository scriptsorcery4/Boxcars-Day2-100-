import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Card from './Card'

function CardArea({img}) {
  return (
    <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <Card car={c1} img={img}/>
                </CarouselItem>
              ))}
              
            </CarouselContent>
            <div className='mt-10 w-full flex justify-center'>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
  )
}

export default CardArea

const c1 = { title: 'T-Cross – 2023', des: '4.0 D5 PowerPulse Momentum 5dr AW…', mil: '15 Miles', ful: 'Petrol', m: 'CVT'}