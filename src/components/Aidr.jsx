import React from 'react'
import pic1 from '/ph1.png'
import pic2 from '/ph2.png'
import pic3 from '/ph3.png'

function Aidr() {
  return (
    <section className='bg-[#002228]'>
      <div className='max-w-[1400px] mx-auto flex py-16 px-5 flex-col md:flex-row gap-16'>
        <div className='space-y-3  w-full md:w-1/3'>
            <img src={pic1} alt="" />
            <h5 className='text-[28px] font-bold text-white'>You’re in Control</h5>
            <p className='text-[20px] text-gray-400'>aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.</p>
        </div>
        <div className='space-y-3 w-full md:w-1/3'>
            <img src={pic2} alt="" />
            <h5 className='text-[28px] font-bold text-white'>Infinitely Scalable</h5>
            <p className='text-[20px] text-gray-400'>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
        </div>
        <div className='space-y-3 w-full md:w-1/3'>
            <img src={pic3} alt="" />
            <h5 className='text-[28px] font-bold text-white'>Incredibly Flexible</h5>
            <p className='text-[20px] text-gray-400'>Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.</p>
        </div>
      </div>
    </section>
  )
}

export default Aidr
