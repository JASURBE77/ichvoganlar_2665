import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
const HomeSec2 = () => {
  return (
    <div>
      <div className="container mx-auto w-[85%]">
        <div className="wrapper flex items-center gap-5">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
