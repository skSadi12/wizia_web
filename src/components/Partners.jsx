import React from 'react'
import pic1 from '/BackHublogo.png'
import pic2 from '/CableLabslogo.png'
import pic3 from '/DBSlogo.png'
import pic4 from '/EasyEurologo.png'
import pic5 from '/AMDlogo.png'
function Partners() {
  return (
    <section className=' bg-[#07292F] mt-[-2px]'>
        <div className='max-w-[800px] mx-auto py-5'>
            <h4 className='text-[#0FF1F6] text-center py-5 font-semibold  md:font-bold'> OUR TRUSTED PARTNERS</h4>
            <div className='flex flex-wrap justify-evenly items-center '>
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
                <img src={pic4} alt="" />
                <img src={pic5} alt="" />
            </div>
        </div>
      
    </section>
  )
}

export default Partners
