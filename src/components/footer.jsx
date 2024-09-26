import React from 'react';
import icon from "../svgs/icon.svg";
import logoName from "../svgs/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center border-t border-black pt-2 pb-5 font-unna">
      <div className="w-full max-w-[1797px] flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-[62px] pt-2 md:pt-[15px] gap-6 md:gap-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2 items-center">
            <img src={icon} alt="icon" className="w-[40px] h-[40px]" />
            <img src={logoName} alt="logo name" className="h-[15px]" />
          </div>
          <p className="text-sm">© 2021 10ancy. All rights reserved.</p>
        </div>

        {/* Icon Section */}
        <div className="flex gap-4 justify-center md:justify-between">
          <FaFacebookSquare className="w-6 h-6 cursor-pointer" />
          <FaTwitter className="w-6 h-6 cursor-pointer" />
          <AiFillInstagram className="w-6 h-6 cursor-pointer" />
          <IoLogoYoutube className="w-6 h-6 cursor-pointer" />
          <IoMailSharp className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Company & Support Section */}
        <div className="flex flex-row gap-5 justify-between">
          <div>
            <p className="font-semibold text-start">Company</p>
            <ul className="list-none mt-2 space-y-2 text-sm text-start">
              <li className="cursor-pointer hover:text-gray-600">About Us</li>
              <li className="cursor-pointer hover:text-gray-600">Locations we cover</li>
              <li className="cursor-pointer hover:text-gray-600">Read our Guidelines</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-start">Support</p>
            <p className="mt-2 cursor-pointer hover:text-gray-600 text-start">Help Center</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
