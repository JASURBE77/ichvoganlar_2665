import React from 'react'
import spicys from "../assets/Image (11).png";
import nuts  from "../assets/Image (10).png";
import vegatables from "../assets/Image (9).png";
import fruit from "../assets/Image (8).png";
const AboutSec4 = () => {
  return (
    <div>
      <section className="bg-[#274C5B] py-20">
      <div className="w-[85%] mx-auto text-center">

        <p className="text-[#7EB693] italic text-xl mb-2">
          About Us
        </p>

        <h2 className="text-white text-4xl font-bold mb-12">
          What We Offer for You
        </h2>

        <div className="flex justify-center gap-6">

          <div className="bg-white rounded-2xl p-6 w-[220px]">
            <img
              src={spicys}
              alt=""
              className="w-full h-[160px] object-cover rounded-xl"
            />
            <p className="mt-4 font-semibold text-[#274C5B]">
              Spicy
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 w-[220px]">
            <img
              src={nuts}
              alt=""
              className="w-full h-[160px] object-cover rounded-xl"
            />
            <p className="mt-4 font-semibold text-[#274C5B]">
              Nuts & Feed
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 w-[220px]">
            <img
              src={fruit}
              alt=""
              className="w-full h-[160px] object-cover rounded-xl"
            />
            <p className="mt-4 font-semibold text-[#274C5B]">
              Fruits
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 w-[220px]">
            <img
              src={vegatables}
              alt=""
              className="w-full h-[160px] object-cover rounded-xl"
            />
            <p className="mt-4 font-semibold text-[#274C5B]">
              Vegetable
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutSec4
