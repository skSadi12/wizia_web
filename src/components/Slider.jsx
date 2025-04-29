import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider() {
  const slider = [
    {
      id: 1,
      heading:
        "Qorem ipsum dolor sit amet.",
      pg: "John Doe"  ,
      description: "Chief Strategy Officer @ Company",
    },
    {
      id: 2,
      heading: "Grow your business with smart automation",
      pg: "John Doe"  ,
      description: "Automate tasks and focus on what truly matters.",
    },
    {
      id: 3,
      heading: "Achieve better results with powerful tools",
      pg: "John Doe"  ,
      description: "Unlock new opportunities with our feature-rich platform.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
  };

  const { heading,pg,description } = slider[currentIndex];

  return (
    <section className="bg-[#002228] mt-[-1px]">
      <div className="max-w-[1400px] mx-auto px-6 md:py-28 text-white py-10">
        <div className="flex  items-center justify-between gap-10">
          <button
            onClick={prevCard}
            className="bg-[#1E3D43] rounded-xl px-3 py-2 transition duration-300"
          >
            <ArrowBackIosNewIcon sx={{color:"#0FF1F6"}}/>
          </button>
          {/* Left Side */}
          <div className="flex flex-col justify-between space-y-6 w-full md:w-1/2 text-center md:text-left items-center ">
            <div className="flex justify-center items-center">
            <img
              className="w-12 md:w-20 mx-auto md:mx-0"
              src="qut.png"
              alt="Shape"
            />
            </div>
            <h2 className=" text-2xl md:text-[32px] text-center">
              {heading}
            </h2>
            <p className="text-[#0FF1F6] text-[20px]">{pg}</p>
            <p className="text-[20px]  text-gray-400">{description}</p>
          </div>
          <button
            onClick={nextCard}
            className="bg-[#1E3D43] rounded-xl px-3 py-2 transition duration-300"
          >
            <ArrowForwardIosIcon sx={{color:"#0FF1F6"}}/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
