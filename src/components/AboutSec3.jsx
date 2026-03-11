import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img7 from "../assets/Image (7).png";
import img5 from "../assets/Image (5).png";
import img6 from "../assets/Image (6).png";
const AboutSec3 = () => {
  return (
    <div>
      <section className="pt-20 pb-20">
        <div className="container mx-auto w-[85%]">
          <div className="wrapper">
            <div className="text-center flex items-center justify-center flex-col gap-5">
              <h2 className="text-4xl text-[#7EB693]">Team</h2>
              <h3 className="text-[#274C5B] text-5xl font-bold">
                Our Organic Experts
              </h3>
              <p className="text-[#525C60] text-[18px]  w-213 ">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="team-cards flex items-center justify-center gap-10 pt-10">
              <div className="w-[350px] rounded-2xl overflow-hidden bg-white shadow-md">
                {/* image */}
                <img
                  src={img7}
                  alt="team"
                  className="w-full h-[350px] object-cover"
                />

                {/* content */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[#274C5B] font-bold text-lg">
                      Giovani Bacardo
                    </h3>

                    <p className="text-[#7EB693] italic text-sm">Farmer</p>
                  </div>

                  {/* social icons */}
                  <div className="flex gap-3 text-[#274C5B] text-lg">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
               <div className="w-[350px] rounded-2xl overflow-hidden bg-white shadow-md">
                {/* image */}
                <img
                  src={img5}
                  alt="team"
                  className="w-full h-[350px] object-cover"
                />

                {/* content */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[#274C5B] font-bold text-lg">
                      Giovani Bacardo
                    </h3>

                    <p className="text-[#7EB693] italic text-sm">Designer</p>
                  </div>

                  {/* social icons */}
                  <div className="flex gap-3 text-[#274C5B] text-lg">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
               <div className="w-[350px] rounded-2xl overflow-hidden bg-white shadow-md">
                {/* image */}
                <img
                  src={img6}
                  alt="team"
                  className="w-full h-[350px] object-cover"
                />

                {/* content */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[#274C5B] font-bold text-lg">
                      Giovani Bacardo
                    </h3>

                    <p className="text-[#7EB693] italic text-sm">Farmer</p>
                  </div>

                  {/* social icons */}
                  <div className="flex gap-3 text-[#274C5B] text-lg">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSec3;
