import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";


function Train() {
  return (
    <section className="bg-[#002228] px-5 py-10 mt-[-1px]">
      <div className="bg-[url(/Frame2.png)] bg-bottom-left bg-no-repeat rounded-4xl bg-cover text-white max-w-[1400px]  mx-auto py-28  flex justify-center items-center ">
        <div className=" space-y-10 px-5 ">
          <div>
            <h3 className="text-[40px] font-bold">
              Train your aiDR on your...
            </h3>
            <h4 className="text-[40px]  text-[#0FF1F6] font-bold">
              prefered email st/
            </h4>
          </div>
          <p className="text-gray-300 text-[24px] max-w-[450px]">
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row text-[#14BCB2] gap-5">
              <p>
                {" "}
                <TaskAltIcon /> Quick to ramp
              </p>
              <p>
                <TaskAltIcon /> Easy to optimize
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-[#14BCB2] gap-5">
              <p>
                {" "}
                <TaskAltIcon /> Quick to scale up
              </p>
              <p>
                <TaskAltIcon /> Works with all your existing tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Train;
