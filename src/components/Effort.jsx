import React from "react";

function Effort() {
  return (
    <section className=" bg-[#002228] text-white px-5">
      <div className="bg-[url(Frame3.png)] max-w-[1400px]  mx-auto w-full bg-bottom-right bg-no-repeat bg-cover rounded-4xl mt-[-2px] ">
        <div className="">
          <div className="max-w-[700px] md:space-y-8 space-y-4 py-16 px-5">
            <h3 className="text-[#FFFFFF] text-[32px]">
              Allocate effort where your reps make an inpact.
            </h3>
            <h2 className="text-[#0FF1F6] text-[32px]">
              Let us handle the rest.
            </h2>
            <p className="text-gray-300 text-[20px]">
              Keep your reps “in the air” -- out in the field and on the phone
              where they can build relationships.
            </p>
          </div>
        </div>
        <div className="flex-col md:flex-row gap-3 md:gap-10 md:space-y-8 space-y-1 py-16 px-5 flex max-w-[700px] ">
          <div>
            <h3 className="text-[#0FF1F6] text-[40px]">32%</h3>
            <p className="text-[20px] text-[#E9EEF1]">
              Improvement in Open Rates
            </p>
          </div>
          <div>
            <h3 className="text-[#0FF1F6] text-[40px]">75%</h3>
            <p className="text-[20px] text-[#E9EEF1]">
              Improvement in Ramp Time
            </p>
          </div>
          <div>
            <h3 className="text-[#0FF1F6] text-[40px]">35%</h3>
            <p className="text-[20px] text-[#E9EEF1]">
              Improvement in Meetings Booked
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Effort;
