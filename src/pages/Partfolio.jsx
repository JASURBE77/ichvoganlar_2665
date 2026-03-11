import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Partfolio = () => {
  const [partfolio, setpartfolio] = useState(null);
  console.log(partfolio);

  const AllProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3001/portfolio");
      setpartfolio(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AllProduct();
  }, []);
  return (
    <div>
      <div className="container w-[85%] mx-auto">
        <div className="wrapper grid grid-cols-3 items-center justify-center gap-20 mt-30 mb-30">
          {partfolio &&
            partfolio.map((e) => (
              <div key={e.id}>
                <Link to={`/partfolioSingle/${e.id}`}>
                <div className="w-[451px] h-[503px] rounded-3xl hover:shadow-lg px-5 py-5 ">
                    <img className="rounded-3xl" src={e.image} alt="" />
                    <h2 className="font-bold text-[#274C5B] text-[25px]"> {e.title}</h2>
                    <p className="italic text-[#7EB693]">{e.category}</p>
                </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Partfolio;
