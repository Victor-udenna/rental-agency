import React from "react";
import logo from "../../assets/images/logo 1.png";

const DesktopNav = () => {
  return (
    <div className=" px-20 bg-secondary_bg hidden md:flex desktop_nav flex justify-between items-center  w-screen overflow-none  border-b-2">
      <div>
        <img src={logo} className="w-[150px]" />
      </div>
      <div className="z-20">
        <ul className="text-white text-[16px] flex items-center justify-between">
          <li className=" border-b-4 py-7 cursor-pointer pr-10">Home</li>
          <li className="cursor-pointer pr-10">Landloard</li>
          <li className="cursor-pointer pr-10">Tenant</li>
          <li className="pr-5 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
