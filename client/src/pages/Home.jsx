import React from 'react'
import hero from '../assets/hero.png'
import img1 from '../assets/sedan.png'
import img2 from '../assets/coupe.png'
import img3 from '../assets/suv.png'
import img4 from '../assets/truck.png'
import img5 from '../assets/hat.png'
import img6 from '../assets/mini.png'  
import icon1 from '../assets/f-d-1.png'
import icon2 from '../assets/f-d-2.png'
import icon3 from '../assets/f-d-3.png'
import icon4 from '../assets/f-d-4.png'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import bf1 from '../assets/electric-car.png'
import bf2 from '../assets/electric-car2.png'
import limg from '../assets/leftimg.png'
import llimg from '../assets/h74.jpg.png'
import TypeCar from '@/components/custom/TypeCar'
import BenfCard from '@/components/custom/BenfCard'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import FilledBtn from '@/components/custom/FilledBtn'
import CardArea from '@/components/CardArea'
import GhostBtn from '@/components/custom/GhostBtn'
import Stats from '@/components/custom/Stats'

function Home() {
  return (
<div className='font-sans'>
    <section className='container flex justify-center relative'>
      <img src={hero} alt="Hero" />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20 gap-4'>
         <p className='text-[16px] text-white'>The World's Largest Used Car Dealership</p>
         <h1 className='text-[52px] font-medium text-white'>Find Your Perfect Vehicle Online</h1>
      </div>
    </section>
    <section className='py-[100px] flex flex-col gap-[30px] items-center'>
        <h2 className='font-bold text-[40px]'>Find Your Perfect Vehicle Online</h2>
        <div className='flex gap-[35px]'>
            <TypeCar img={img1} title='Sedan'/>
            <TypeCar img={img2} title='Coupe'/>
            <TypeCar img={img3} title='SUV'/>
            <TypeCar img={img4} title='Truck'/>
            <TypeCar img={img5} title='Hatchback'/>
            <TypeCar img={img6} title='Convertible'/>
        </div>
    </section>
    <section className='bg-[#F9FBFC] py-[115px]'>
      <div className='container flex justify-between'>
        <h2 className='w-[366px] font-bold text-[40px] leading-[48px]'>We're BIG on what matters to you</h2>
        <div className='grid grid-cols-2 gap-[40px]'>
          <BenfCard img={icon1} title='Special Financing Offers' des='Our stress-free finance department that can find financial solutions to save you money.'/>
          <BenfCard img={icon2} title='Trusted Car Dealership' des='Our stress-free finance department that can find financial solutions to save you money.'/>
          <BenfCard img={icon3} title='Transparent Pricing' des='Our stress-free finance department that can find financial solutions to save you money.'/>
          <BenfCard img={icon4} title='Expert Car Service' des='Our stress-free finance department that can find financial solutions to save you money.'/>
        </div>
      </div>
    </section>
    <section className='container'>
      <div className='py-[115px] flex flex-col gap-[40px] items-center'>
        <h2 className='font-bold text-[40px]'>The Most Searched Cars</h2>
        
            <Tabs defaultValue="sedan" className='w-full'>
                <div className='border-b w-full flex justify-center'>
                <TabsList>
                  <TabsTrigger value="sedan">Sedan</TabsTrigger>
                  <TabsTrigger value="suv">SUV</TabsTrigger> 
                  <TabsTrigger value="con">Convertible</TabsTrigger> 
                  <TabsTrigger value="hat">Hatchback</TabsTrigger> 
                </TabsList>
              </div>
          
          <TabsContent value="sedan" className='py-[50px]'>
                <CardArea img={car1}/>
          </TabsContent>
          <TabsContent value="suv" className='py-[50px]'>
                <CardArea img={car2}/>
          </TabsContent>
          <TabsContent value="con" className='py-[50px]'>
                <CardArea img={car3}/>
          </TabsContent>
          <TabsContent value="hat" className='py-[50px]'>
                <CardArea img={car4}/>
          </TabsContent>
          
      </Tabs>
      </div>
    </section>
    <section className='container flex gap-[30px]'>
              <div className='relative bg-[#E9F2FF] flex flex-col p-[80px] w-full rounded-[16px] gap-[10px]'>
                  <h4 className='font-bold text-[30px] leading-[45px]'>Are You Looking <br />For a Car ?</h4>
                  <p className='text-[15px] leading-[28px]'>We are committed to providing our customers with <br />exceptional service.</p>
                  <FilledBtn  col='blue'>Get Started</FilledBtn>
                  <div className='absolute bottom-0 right-0 flex justify-end items-end p-[40px] z-10'>
                    <img className='h-[110px]' src={bf1} alt="" />
                  </div>
              </div>
              <div className='relative bg-[#FFE9F3] flex flex-col p-[80px] w-full rounded-[16px] gap-[10px]'>
                  <h4 className='font-bold text-[30px] leading-[45px]'>Do You Want to <br />Sell a Car ?</h4>
                  <p className='text-[15px] leading-[28px]'>We are committed to providing our customers with <br />exceptional service.</p>
                  <FilledBtn>Get Started</FilledBtn>
                  <div className='absolute bottom-0 right-0 flex justify-end items-end p-[40px] z-10'>
                    <img className='h-[110px]' src={bf2} alt="" />
                  </div>
              </div>
    </section>
    <section className='container py-[100px] flex flex-col gap-[50px]'>
        <h2 className='font-bold text-[40px] leading-[40px] text-center'>Recommended Cars For You</h2>
        <CardArea img={car1}/>
    </section>
    <section className='flex'>
        <div className='w-1/2'>
          <img className='w-full' src={limg} alt="" />
        </div>
        <div className='w-1/2 bg-[#050B20] px-[80px] flex flex-col text-white justify-center'>
            <h2 className='font-bold text-[40px] leading-[56px]'>Online, in-person, <br />everywhere</h2>
            <p className='text-[15px] leading-[28px] pt-[42px] pb-[36px]'>Choose from thousands of vehicles from multiple brands and buy online with Click <br />  & Drive, or visit us at one of our dealerships today.</p>
            <GhostBtn>Get Started</GhostBtn>
        </div>
    </section>
    <section className='container flex justify-around items-center pt-[60px]'>
      <Stats title='836M' des='CARS FOR SALE' />
      <Stats title='738M' des='DEALER REVIEWS' />
      <Stats title='100M' des='VISITORS PER DAY' />
      <Stats title='238M' des='VERIFIED DEALERS' />
    </section>
    <section className='container py-[100px] flex flex-col gap-[50px]'>
        <h2 className='font-bold text-[40px] leading-[40px] text-center'>Upcoming Cars</h2>
        <CardArea img={car2}/>
    </section>
    <section className='bg-[#F9FBFC]'>
      <div className='container flex gap-[100px] py-[40px]'>
        <img className='w-[617px]' src={llimg} alt="" />
        <div className='flex flex-col justify-center'>
          <h2 className='text-bold text-[40px]'>Have more questions? Don't <br />hesitate to reach us</h2>
          <p className='text-[15px] leading-[28px] py-[10px] '>123 Queensberry Street, North <br />Melbourne VIC3051, Australia.</p>
          <FilledBtn>Get Started</FilledBtn>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home


