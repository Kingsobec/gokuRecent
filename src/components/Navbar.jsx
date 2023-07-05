import React from 'react'
import {logo} from "../assets"

const Navbar = () => {
  return (
    <section className=' sticky top-0 z-50'>
      <p className="uppercase p-4 text-[1.2rem] text-right text-[#71192e] font-medium md:block hidden bg-[#f68f78]">
        <a href="" className='trans hover:underline'>book with us <i className="fa-regular fa-circle-right ml-2 text-[1.2em]"></i></a>
      </p>

      <div className="bg-[#fef6f5] flex justify-between items-center md:pl-8 pl-[1rem] h-[70px] pr-4 md:pr-0">
        <img src={logo} alt="" className="w-[100px]" />
        <div className=" text-[#71192e] flex">
          <button className=' p-3 border-[1.5px] rounded-md  border-[#71192e] md:block hidden m-2'>EN</button>
          <button className=' p-3 border-[1.5px] rounded-md  border-[#71192e] ml-5 m-2'>MENU</button>
          <a href="" target='_blank' className='bg-[#4b6ccc] p-[1.4rem] rounded-bl-[20px] text-white hover:bg-[#1f4ea1] trans hover:text-[1.05em] top-0 ml-5 md:block hidden'>Get a quote</a>
        </div>
      </div>
    </section>
  )
}

export default Navbar