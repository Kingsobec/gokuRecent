import React from 'react'

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
      <div className="p-2 rounded-b-[10px] md:bg-white md:flex justify-between items-center flex-col md:flex-row">
        <div className="pl-4 md:p-4 mt-4 bg-white w-full rounded-[10px] mb-4">
          <i className="fa-solid fa-location-dot mr-2"></i>
        <input type="text" className=' bg-transparent p-4'placeholder="Start typing address" />
        </div>
        <div className="pl-4 text-[1.2rem] hover:text-[#f68f78] trans border-l-2 p-4 bg-white w-full rounded-[10px] mb-4">
          <i className="fa-solid fa-bed mr-2"></i>
          <select name="Bedroom" id="">
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


      <div className=" text-[#71192e] mt-[5rem] p-2">
        <h2 className="mb-8 text-[1rem] font-bold">ABOUT GUESTREADY</h2>
        <div className="flex gap-5 justify-between md:flex-row flex-col">
          <p className=" text-[2rem] font-semibold md:w-[23%]">We enable owners and guests to make the most of every stay.</p>
          <p className=" md:w-[75%] text-[1.5rem]">GuestReady is an Airbnb management company that provides a full property management service for short and mid-term lets. Our team delivers exceptional service to you and your guests, ensuring that every stay is a great one. If you’re an owner looking to rent out your property or short-term let, we’ll take care of everything and help you maximise your profits using our cutting-edge technology. Embrace your place with GuestReady.</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage