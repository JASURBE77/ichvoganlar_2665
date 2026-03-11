import React from "react";
import img1 from "../assets/Image (4).png";
import { FaTruck } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";
const AboutSec1 = () => {
  return (
    <div>
      <div className="conyainer mx-auto w-[85%]">
        <div className="wrapper flex items-center justify-center gap-40 pb-10 pt-10">
          <div className="left w-[700px]">
            <img src={img1} alt="" />
          </div>
          <div className="right flex  flex-col gap-5 ">
            <h4 className="text-[#7EB693] text-[36px] italic">About Us</h4>
            <h3 className="font-bold text-[50px] text-[#274C5B] w-[500px]">
              We do Creative Things for Success
            </h3>
            <div className="comment text-[#525C60] text-[18px] flex items-center flex-col gap-10 w-[630px]">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="icon flex items-center justify-around gap-5">
              <FaTruck />
              <p className="text-[#274C5B] text-[20px] font-semibold"> Modern Agriculture Equipment</p>
              <FaTruck />
              <p className="text-[#274C5B] text-[20px] font-semibold">No growth hormones are used</p>
            </div>
            <button className="w-[200px] h-[60px] rounded-[16px] text-white text-[20px] font-medium bg-[#274C5B] flex items-center justify-center gap-2">Explore More <VscArrowSmallRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec1;
