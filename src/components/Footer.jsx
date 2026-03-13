import React, { useState } from "react";
import bg from "../assets/newsletter.png";

import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
   if (email.length < 10) {
    alert("Введите email");
  } else {
    alert("Подписка прошла успешно!!!!!!");
  }
};
  return (
    <footer className="mt-30">

      <div
        className="w-[65%] mx-auto rounded-[30px] bg-cover bg-center py-30 px-20 flex items-center justify-between"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-white text-4xl font-bold w-[350px]">
          Subscribe to our Newsletter
        </h2>

        <div className="flex gap-4 ">
          <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
            type="email"
            placeholder="Your Email Address"
            className=" px-6 py-4 rounded-xl bg-white w-[300px]"
          />

          <button className="bg-[#274C5B] text-white px-8 py-4 rounded-xl" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-[85%] mx-auto grid grid-cols-3 gap-10 mt-20 pb-10 border-t pt-10">

        <div className="text-right">
          <h3 className="text-xl font-bold text-[#274C5B] mb-6">
            Contact Us
          </h3>

          <p className="font-bold">Email</p>
          <p className="text-gray-500 mb-4">needhelp@Organia.com</p>

          <p className="font-bold">Phone</p>
          <p className="text-gray-500 mb-4">666 888 888</p>

          <p className="font-bold">Address</p>
          <p className="text-gray-500">
            88 road, borklyn street, USA
          </p>
        </div>

        <div className="text-center border-l border-r px-10">
          <h2 className="text-3xl font-bold text-[#274C5B] mb-4">
            Organick
          </h2>

          <p className="text-gray-500 mb-6">
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing
          </p>

          <div className="flex justify-center gap-4">

            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7EB693] hover:text-white transition">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7EB693] hover:text-white transition">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7EB693] hover:text-white transition">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7EB693] hover:text-white transition">
              <FaPinterestP />
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#274C5B] mb-6">
            Utility Pages
          </h3>

          <ul className="text-gray-500 space-y-3">
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;