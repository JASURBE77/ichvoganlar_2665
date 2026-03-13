import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className=" border-b-1">
      <div className="container mx-auto w-[85%]">
        <div className="wrapper flex items-center justify-between py-6 px-6">
          <img src={logo} alt="" />
          <nav>
            <ul className="flex items-center gap-10 ">
              <Link to={"/"}>
                <li className="text-2xl font-bold text-[#274C5B] hover:text-[#EFD372]">
                  Home
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="text-2xl font-bold text-[#274C5B] hover:text-[#EFD372]">
                  About
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className="text-2xl font-bold text-[#274C5B] hover:text-[#EFD372]">
                  Shop
                </li>
              </Link>
              <Link to={"/partfolio"}>
                <li className="text-2xl font-bold text-[#274C5B] hover:text-[#EFD372]">
                  Projects
                </li>
              </Link>
              <Link to={"/blog"}>
                <li className="text-2xl font-bold text-[#274C5B] hover:text-[#EFD372]">
                  News
                </li>
              </Link>
            </ul>
          </nav>
          <div className="inp w-94 h-14 rounded-4xl bg-[#FAFAFA] flex items-center justify-between">
            <input
              className="border-transparent w-84 h-13 rounded-4xl relative"
              type="text"
            />
            <button className="w-14 h-14 bg-[#7EB693] border-none rounded-4xl text-white text-2xl text-center flex items-center justify-center ">
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
