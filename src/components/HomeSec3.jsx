import React, { useEffect, useState } from "react";
import img1 from "../assets/Photo (5).png";
import { FaTruck } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";
import img3 from "../assets/1.png";
import img2 from "../assets/2.png";
import Xshop from "../pages/Xshop";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "../assets/Photo (1).jpg";
const HomeSec3 = () => {
  const [product, setproduct] = useState([]);

  const getproduct = async () => {
    const res = await axios.get("http://localhost:3001/products");
    setproduct(res.data);
  };

  useEffect(() => {
    getproduct();
  }, []);
  return (
    <div>
      <div className="container mx-auto w-[85%]">
        <div className="wrapper flex items-center gap-25 pt-30 ">
          <img src={img3} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="wrap bg-[#F9F8F8] mt-30">
        <div className="conyainer mx-auto w-[85%]">
          <div className="wrapper flex items-center justify-center gap-40 pb-10 pt-30 ">
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
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="icon flex  items-center justify-around gap-5">
                <FaTruck />
                <p className="text-[#274C5B] text-[20px] font-semibold">
                  {" "}
                  Modern Agriculture Equipment
                </p>
                <FaTruck />
                <p className="text-[#274C5B] text-[20px] font-semibold">
                  No growth hormones are used
                </p>
              </div>
              <Link to={"/litzensatsiya"}>
              <button className="w-[200px] h-[60px] rounded-[16px] text-white text-[20px] font-medium bg-[#274C5B] flex items-center justify-center gap-2">
                Explore More <VscArrowSmallRight />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <div className="container w-[85%] mx-auto">
          <div className="wrrapper">
            <div className="text-center">
              <p className="text-4xl text-[#7EB693] italic">Categories </p>
              <h2 className="text-[#274C5B] text-5xl font-bold">
                Our Products
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-6 p-10 mx-auto w-[84%] ">
              {product.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-xl p-5  shadow hover:shadow-lg transition"
                >
                  <span className="text-[18px] inline-block bg-teal-700 text-white text-xs px-[15px]  py-1 rounded-[9px] mb-4  text-center">
                    {item.category}
                  </span>

                  <img
                    src={`${item.image}`}
                    alt={item.title}
                    className="w-[220px] h-[130px] object-contain mx-auto rounded-[10px]"
                  />

                  <h3 className="mt-4 text-gray-700 font-semibold text-[20px] border-b-1 border-gray-300 pb-[5px]">
                    {item.title}
                  </h3>

                  <div className="flex  gap-2 mt-2 items-center">
                    <span className="line-through text-gray-400">$20.00</span>
                    <span className="text-green-600 font-bold">
                      ${item.price}
                    </span>
                  </div>

                  <div className="text-orange-400 mt-2 opacity-[0.5]">
                    ★★★★★
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-center ">
              <Link to={"/shop"}>
                <button className="w-[200px] h-[60px] rounded-[16px] text-white text-[20px] font-medium bg-[#274C5B] flex items-center justify-center gap-2">
                  Load More <VscArrowSmallRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-10 pt-20 bg-cover bg-center py-30"
        style={{ backgroundImage: "url('src/assets/Image.jpg')" }}
      >
        <div className="container w-[85%] mx-auto">
          <div className="text-center flex items-center flex-col gap-7">
            <p className="text-4xl text-[#7EB693] italic">Testimonial </p>
            <h2 className="text-[#274C5B] text-5xl font-bold">
              What Our Customer Saying?
            </h2>
          </div>
          <div className="profil text-center flex items-center flex-col gap-5 pt-5">
            <img src={img} className="rounded-[50px] mx-auto" alt="" />
            <p className="textarea-lg text-[#525C60] ">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy <br /> text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <div className="tt">
              <h3 className="text-[#274C5B] text-2xl">Sara Taylor</h3>
              <p className="text-[15px] text-[#525C60]">Consumer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#274C5B]  pt-30 pb-30">
        <div className="container mx-auto w-[75%]">
          <div className="wrapp flex items-center justify-between pt-20">
            <div className="text flex items-start flex-col gap-7">
              <p className="text-4xl text-[#7EB693] italic">Offer </p>
              <h2 className=" text-5xl font-bold text-white">
                We Offer Organic For You
              </h2>
            </div>
            <Link to={"/shop"}>
              <button className="w-[200px] h-[60px] rounded-[16px] text-[#274C5B] text-[20px] font-medium bg-[#EFD372] flex items-center justify-center gap-2">
                View All Product{" "}
                <VscArrowSmallRight className="bg-[#274C5B] text-white rounded-full" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6 pt-20  mx-auto w-[84%] ">
            {product.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-xl p-5  shadow hover:shadow-lg transition"
              >
                <span className="text-[18px] inline-block bg-teal-700 text-white text-xs px-[15px]  py-1 rounded-[9px] mb-4  text-center">
                  {item.category}
                </span>

                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-[220px] h-[130px] object-contain mx-auto rounded-[10px]"
                />

                <h3 className="mt-4 text-gray-700 font-semibold text-[20px] border-b-1 border-gray-300 pb-[5px]">
                  {item.title}
                </h3>

                <div className="flex  gap-2 mt-2 items-center">
                  <span className="line-through text-gray-400">$20.00</span>
                  <span className="text-green-600 font-bold">
                    ${item.price}
                  </span>
                </div>

                <div className="text-orange-400 mt-2 opacity-[0.5]">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
