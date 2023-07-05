import React from 'react'
import { flex1, flex2, flex3, flex4, video } from '../assets'

const HomePage = () => {

  return (
    <section className=' relative'>
      <div className="home px-[1rem] md:px-[5rem] py-8 md:py-[4rem]">
            <div className="absolute"></div>
      <div className="prop min-h-[300px] p-6 rounded-t-[10px]">
        <div className="lg:w-[500px] md:h-[400px] md:w-[400px] w-[300px] h-[300px] lg:h-[500px]  bg-[#fef6f5] p-8 shape">
          <div className="absolute bottom-8 w-[80%] flex flex-col md:gap-5 gap-1">
            <h2 className=" text-[#f68f78] font-bold md:text-[1.2rem]">AIRBNB <br className="md:hidden" /> MANAGEMENT <br /> COMPANY</h2>
          <p className=" text-[#71192e] text-[1.2rem] md:text-[1.5rem] font-semibold">Your property has <br /> potential.</p>
          <p className="text-[#71192e] text-[.9rem] md:text-[1rem]">Calculate how much you can make with GuestReady</p>
          </div>
        </div>
      </div>
      <div className="px-2 rounded-b-[10px] md:bg-white md:flex justify-between items-center flex-col md:flex-row">
        <div className="p-1 md:p-2 mt-4 bg-white w-full rounded-[10px] mb-4">
          <i className="fa-solid fa-location-dot mr-2"></i>
        <input type="text" className=' bg-transparent p-4'placeholder="Start typing address" />
        </div>
        <div className="pl-4 text-[1.2rem] hover:text-[#f68f78] trans border-l-2 p-4 bg-white w-full rounded-[10px] mb-4">
          <i className="fa-solid fa-bed mr-2"></i>
          <select name="Bedroom" id="" className=' bg-transparent'>
            <option value="none">No. of bedrooms</option>
            <option value="studio">studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
        </select>
        </div>
        <p className="bg-[#4b6ccc] py-[1.4rem] rounded-[10px] text-center md:px-[1.6rem] text-white hover:bg-[#1f4ea1] trans hover:text-[1.05em] top-0 md:ml-5 cursor-pointer w-full">Get Estimate</p>

      </div>
      </div>


      <div className=" text-[#71192e] mt-[5rem] px-[1rem] md:p-[4rem] mb-[2rem]">
        <h2 className="mb-8 text-[1rem] font-bold">ABOUT GUESTREADY</h2>
        <div className="flex gap-5 justify-between md:flex-row flex-col">
          <p className=" text-[2rem] font-semibold md:w-[23%]">We enable owners and guests to make the most of every stay.</p>
          <p className=" md:w-[75%] text-[1.5rem]">GuestReady is an Airbnb management company that provides a full property management service for short and mid-term lets. Our team delivers exceptional service to you and your guests, ensuring that every stay is a great one. If you’re an owner looking to rent out your property or short-term let, we’ll take care of everything and help you maximise your profits using our cutting-edge technology. Embrace your place with GuestReady.</p>
        </div>
      </div>


      <div className="px-[1rem] md:px-[5rem] py-8 md:py-[4rem]">
        <video src={video} autoPlay loop muted className='w-full rounded-lg'></video>
      </div>

      <div className="px-[1rem] md:px-[5rem] py-8 md:py-[4rem] bg-[#f2f4e4] text-[#283755]">
        <div className="md:max-w-[65%] px-8 sm:px-0">
          <h2 className=' text-[1.8rem] md:text-[3rem] mb-4'>Full property management services</h2>
          <p className="text-[1rem] md:text-[1.2rem] mb-4">We eliminate the inconvenience of short-letting and help you maximise your rental revenue.</p>
        </div>
        <div className=" flex justify-between text-[.8rem] md:text-[1rem] gap-2 flex-wrap">
          <div className=" flex justify-between md:w-[68%] w-full mb-10 flex-col sm:flex-row px-8 sm:px-0">
            <div className="">
            <h3 className=" p-2 text-[1rem] md:text-[1.2rem] mb-2 md:mb-4">Online management</h3>
            <ul className='border-l p-2 border-[#ccc]'>
              <li><i className="fa-solid fa-check p-2"></i>One property, multiple listings</li>
              <li><i className="fa-solid fa-check p-2"></i>Professional photography</li>
              <li><i className="fa-solid fa-check p-2"></i>Listing creation</li>
              <li><i className="fa-solid fa-check p-2"></i>Price optimisation</li>
            </ul>
          </div>
          <div className="">
            <h3 className=" p-2 text-[1rem] md:text-[1.2rem] mb-2 md:mb-4">Guest management</h3>
            <ul className='border-l p-2 border-[#ccc]'>
              <li><i className="fa-solid fa-check p-2"></i>Guest vetting</li>
              <li><i className="fa-solid fa-check p-2"></i>Check p-2-in</li>
              <li><i className="fa-solid fa-check p-2"></i>Linen and toiletries</li>
              <li><i className="fa-solid fa-check p-2"></i>Guest communication</li>
            </ul>
          </div>
          <div className="">
            <h3 className=" p-2 text-[1rem] md:text-[1.2rem] mb-2 md:mb-4">Property management
</h3>
            <ul className='border-l p-2 border-[#ccc]'>
              <li><i className="fa-solid fa-check p-2"></i>Housekeeping</li>
              <li><i className="fa-solid fa-check p-2"></i>Maintenance</li>
              <li><i className="fa-solid fa-check p-2"></i>Insurance</li>
            </ul>
          </div>
          </div>
          <div className=" bg-[#283755] text-white p-8 lg:p-[3rem] rounded-lg md:w-[30%] m-auto md:mt-[-6rem]">
            <p className=" text-[1rem]">COMMISSION-BASED PRICING FROM</p>
            <div className="flex justify-between items-center">
              <p className=" text-[4rem] pr-2">15%</p>
            <p className="">of your rental revenue</p>
            </div>
            <p className=" text-center mb-4">The commisions depends on the property profile</p>
            <a href="" className=" flex">
              <p className="bg-[#4b6ccc] py-[1.4rem] rounded-[10px] text-center px-[1.6rem] text-white hover:bg-[#1f4ea1] trans hover:text-[1.05em] cursor-pointer m-auto">Get Estimate</p>
            </a>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[5rem] md:mt-0">
          <div className=" rounded-[10px] overflow-hidden relative">
              <img src={flex1} alt="" className='w-full m-auto image trans' />
              <p className="absolute p-4 bottom-[1rem] left-[1rem] z-10 bg-white text-[#283755] text-[1rem] lg:text-[1.2rem] rounded-md ">Housekeeping</p>
          </div>
          <div className=" rounded-[10px] overflow-hidden relative">
              <img src={flex2} alt="" className='w-full m-auto image trans' />
              <p className="absolute p-4 bottom-[1rem] left-[1rem] z-10 bg-white text-[#283755] text-[1rem] lg:text-[1.2rem] rounded-md ">Guest communication</p>
          </div>
          <div className=" rounded-[10px] overflow-hidden relative">
              <img src={flex3} alt="" className='w-full m-auto image trans' />
              <p className="absolute p-4 bottom-[1rem] left-[1rem] z-10 bg-white text-[#283755] text-[1rem] lg:text-[1.2rem] rounded-md ">Check-ins</p>
          </div>
          <div className=" rounded-[10px] overflow-hidden relative">
              <img src={flex4} alt="" className='w-full m-auto image trans' />
              <p className="absolute p-4 bottom-[1rem] left-[1rem] z-10 bg-white text-[#283755] text-[1rem] lg:text-[1.2rem] rounded-md ">Professional photography</p>
          </div>
      </div>
      </div>

      
    </section>
  )
}

export default HomePage