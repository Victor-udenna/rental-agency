import React from "react";
import logo from "../../assets/images/logo 1.png";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className=" px-20 bg-secondary_bg hidden md:flex desktop_nav flex justify-between items-center py-3  overflow-x-hidden  border-b-2">
      <div>
        <Link to="/"><img src={logo} className="w-[150px]" /></Link>
      </div>
      <div className="z-20">
        <ul className="text-white text-[16px] flex items-center justify-between">
         <Link to="/"> <li className="py-7 cursor-pointer pr-10">Home</li></Link>
          <Link to="/Landlord"><li className="cursor-pointer pr-10">Landlord</li></Link>
         <Link to="/Tenant"> <li className="cursor-pointer pr-10">Tenant</li></Link>
         <Link to="/ContactUs"> <li className="pr-5 cursor-pointer">Contact Us</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
