import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Hero() {
  return (
    <section className="bg-[url(Imgf.png)]  text-white w-full bg-bottom-right bg-no-repeat md:bg-cover">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[500px] md:space-y-12 space-y-4 py-16 px-5" >
          <h3 className="text-[#0FF1F6] text-[24px]">AI SDRs (aiDRs)</h3>
          <h2 className="text-[#FFFFFF] text-[64px]">More leads, less people.</h2>
          <p className="text-gray-300 text-[20px]">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <button className="bg-[#0FF1F6] text-xl px-5 py-2 text-black rounded-[45px] hover:bg-white hover:text-black">
            Sign Up for the Beta 
            <OpenInNewIcon/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
