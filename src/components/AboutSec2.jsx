import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import img2 from "../assets/Photo.jpg";
import icon from "../assets/Icon (3).png";
const AboutSec2 = () => {
 return (
    <section className="py-20 bg-[#F9F8F8]">
      <div className="w-[85%] mx-auto flex items-center justify-center gap-40">
        
        <div className="max-w-[500px]">
          <p className="text-[#7EB693] text-[36px] italic">Why Choose us?</p>

          <h2 className="font-bold text-[50px] text-[#274C5B] w-[600px]">
            We do not buy from the open market & traders.
          </h2>

          <p className="text-[#525C60] text-[18px]">
            Simply dummy text of the printing and typesetting industry.
            Lorem had ceased to been the industry's standard the 1500s.
          </p>

          <div className="flex items-start flex-col gap-3 mb-4">
            <div className="flex items-center gap-1 w-75 py-5 bg-[#ECECEC] px-6 rounded-4xl">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
              <h4 className="font-semibold  ">100% Natural Product</h4>
            </div>
            <p className='text-[#525C60] text-[18px] pl-10'>
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
            </p>
          </div>

           <div className="flex items-start flex-col gap-3 mb-4">
            <div className="flex items-center gap-1 w-75 py-5 bg-[#ECECEC] px-6 rounded-4xl">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
              <h4 className="font-semibold  "> Increases resistance</h4>
            </div>
              <p className='text-[#525C60] text-[18px] pl-10'>
                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
            </p>
          </div>
        </div>

     
        <div>
          <img
            className="w-[450px] rounded-2xl"
            src={img2}
            alt="food"
          />
        </div>
      </div>

      <div className="w-[85%] mx-auto flex items-center justify-center gap-7 mt-16">
        
        <div className="bg-white py-6 w-[257px] h-[300px] rounded-xl text-center">
            <div className="flex items-center justify-center">
            <img src={icon} alt="" />
            </div>
          <h4 className="font-semibold mb-2">Return Policy</h4>
          <p className="text-gray-500 text-sm">
            Simply dummy text of the printing industry.
          </p>
        </div>

        <div className="bg-white py-6 w-[257px] h-[300px] rounded-xl text-center">
             <div className="flex items-center justify-center">
            <img src={icon} alt="" />
            </div>
          <h4 className="font-semibold mb-2">100% Fresh</h4>
          <p className="text-gray-500 text-sm">
            Simply dummy text of the printing industry.
          </p>
        </div>

        <div className="bg-white py-6 w-[257px] h-[300px] rounded-xl text-center">
             <div className="flex items-center justify-center">
            <img src={icon} alt="" />
            </div>
          <h4 className="font-semibold mb-2">Support 24/7</h4>
          <p className="text-gray-500 text-sm">
            Simply dummy text of the printing industry.
          </p>
        </div>

        <div className="bg-white py-6 w-[257px] h-[300px] rounded-xl text-center">
             <div className="flex items-center justify-center">
            <img src={icon} alt="" />
            </div>  
          <h4 className="font-semibold mb-2">Secured Payment</h4>
          <p className="text-gray-500 text-sm">
            Simply dummy text of the printing industry.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutSec2
