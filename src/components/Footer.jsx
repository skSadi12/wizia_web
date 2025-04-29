import React from 'react'
import logo from '/LogoL.png'
function Footer() {
  return (
    <footer className='bg-[#07292F]'>
      <div className='max-w-[1400px] mx-auto flex-col md:flex-row gap-5 text-gray-300 px-5 py-7 md:py-16 flex justify-between items-center ' > 
        <div><img src={logo} alt="" /></div>
        <div className='flex gap-2 flex-col md:flex-row text-center'>
            <p  className='text-[#96ACAF] text-[16px]'>Copyright © 2023 Wizia. </p>
            <p  className='text-[#96ACAF] text-[16px]'> All rights reserved .</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
