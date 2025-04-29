import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Outbound() {
  return (
    <section className='bg-[#002228] mt-[-1px]'>
      <div className=' space-y-7 px-5 mx-auto max-w-[700px] text-center  py-16 '>
        <h3 className='text-[#0FF1F6] text-[20px]'>GET STARTED</h3>
        <h2 className='text-[#FFFFFF] text-[36px] font-bold '>Embrace the new era of outbound.</h2>
        <p className='text-gray-300 text-[20px]'>Wizia lets you train, activate, and optimize aiDRs. <br />
        Take your outbound to new levels of performance and efficiency.</p>
        <button className="bg-[#0FF1F6] text-xl px-5 py-2 text-black rounded-[45px] hover:bg-white hover:text-black">
            Sign Up for the Beta 
            <OpenInNewIcon/>
          </button>
      </div>
    </section>
  )
}

export default Outbound
