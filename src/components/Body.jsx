import React from 'react'
import shoes from '../assets/shoes.svg'
import flipkart from '../assets/flipkart.svg'
import amazon from '../assets/amazon.svg'

function Body() {
  return (
    <div className='  mx-40 my-5 flex p-16'>
      <div className>
            <h1 className='font-extrabold text-8xl'>YOUT FEET DESERVE THE BEST</h1>
            <p className='font-semibold text-gray-500 w-[60%] m-4'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <button className='bg-red-600 px-8 py-3 text-white text-2xl m-4 rounded-sm'>Shop Now</button>
            <button className='border border-black px-8 py-3 text-2xl m-4 rounded-sm bg-gray-300'>Category</button>
            <h4 className='text-2xl text-gray-400 px-4'>Also Avilable On</h4>
            <img src={flipkart} alt="" className='inline-block m-3' />
            <img src={amazon} alt=""  className='inline-block' />
      </div>
      <div>
            <img src={shoes} alt=""  className='w-[1000px]' />
      </div>
    </div>
  )
}

export default Body
