import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import carrot from "../assets/Image (13).png";

const PartfolioSingle = () => {
  const { id } = useParams();
  const [portfolio, setpartfolio] = useState(null);
  console.log(portfolio);
  
  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/portfolio/${id}`);
      setpartfolio(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!portfolio) {
    return <div className="flex items-center justify-center mt-50"><span className="loading loading-spinner loading-xl"></span></div> ;
  }

  return (
    <div>
      <div className="w-full h-[600px] mt-20">
        <img
          src={portfolio.image}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="w-[900px] mx-auto bg-white shadow-xl rounded-2xl  -mt-20 relative z-10">
        <div className="flex justify-between items-start">

          <div className="p-10">
            <h1 className="text-4xl font-bold text-[#274C5B] mb-4">
              {portfolio?.title}
            </h1>

            <p className="text-[#525C60] max-w-[500px]">
              {portfolio.aboutTheFarm}
            </p>
          </div>

          <div className="text-[#274C5B] pt-30 bg-[#FAFAFA] p-10 h-84">
            <p><span className="font-semibold">Date:</span> {portfolio?.date}</p>
            <p><span className="font-semibold">Client:</span> {portfolio?.client}</p>
            <p><span className="font-semibold">Category:</span> {portfolio?.category}</p>
            <p><span className="font-semibold">Service:</span> {portfolio?.service}</p>
          </div>

        </div>
      </div>

      <div className="w-[900px] mx-auto mt-20 space-y-10">

        <div>
          <h2 className="text-2xl font-bold text-[#274C5B] mb-4">
            About The Farm:
          </h2>

          <p className="text-[#525C60]">
            {portfolio?.aboutTheFarm}
          </p>
        </div>

        <img
          src={carrot}
          alt=""
          className="rounded-2xl w-full"
        />

        <div>
          <h2 className="text-2xl font-bold text-[#274C5B] mb-4">
            How To Farm:
          </h2>

          <p className="text-[#525C60]">
            {portfolio?.howToFarm}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#274C5B] mb-4">
            Conclusion:
          </h2>

          <p className="text-[#525C60]">
            {portfolio?.conclusion}
          </p>
        </div>

      </div>
    </div>
  );
};

export default PartfolioSingle;