import React from "react";
import icon from "../svgs/icon.svg";
import logoName from "../svgs/logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";



const Navbar = () => {

  

  return (
    <nav className="w-full flex flex-col md:flex-row justify-center items-center border-b border-b-gray-300 bg-[primaryColor] font-unna">
      <div className="w-full max-w-[1797px] flex flex-col md:flex-row justify-between items-center px-4 md:px-[62px] pt-1 md:pt-4">
        {/* Logo Section */}
        <div className="flex gap-2 items-center mb-4 md:mb-0">
          <img src={icon} alt="icon" className="w-[40px] h-[40px] pb-1" />
          <img src={logoName} alt="logo name" className="h-[15px]" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-9">
        <Link to={"/base"}>
          <p className="cursor-pointer hover:text-gray-700">Make a choice</p>
        </Link>

          <Link to={"/listedproperties"}>
            <p className="cursor-pointer hover:text-gray-700">Become a host</p>
          </Link>
          
          <p className="cursor-pointer hover:text-gray-700">About Us</p>
        </div>

        {/* Icons and Account */}
        <div className="flex gap-10 items-center">
            <Link to={"/notificationlist"}>
              <IoMdNotificationsOutline className="w-6 h-6 cursor-pointer" />
            </Link>
            
            <Link to={"/notifications"}>
              <RiMessage2Line className="w-6 h-6 cursor-pointer" />
            </Link>
            
          <div className="flex gap-3 items-center cursor-pointer">
            <CgProfile className="w-6 h-6" />
            <span>Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
