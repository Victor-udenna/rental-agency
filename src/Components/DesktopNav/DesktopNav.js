import React from "react";
import logo from "../../assets/images/logo 1.png";

const DesktopNav = () => {
  return (
    <div className="desktop_nav bg-primary_bg grid grid-cols-2 items-center  px-10 py-5 w-screen">
      <div>
        <img src={logo} className="w-[150px] " />
      </div>
      <div>
        <ul className="text-white text-[18px] flex items-center justify-between">
          <li className="active">Home</li>
          <li>Landloard</li>
          <li>Tenant</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
