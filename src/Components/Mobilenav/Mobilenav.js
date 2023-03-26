import React, { Fragment, useState } from "react";
import logo from "../../assets/images/logo 1.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Mobilenav = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdown);

  return (
    <Fragment>
      <nav className=" px-10 bg-secondary_bg py-5  flex items-center justify-between md:hidden">
        <div>
          <img src={logo} className=" w-[100px]" />
        </div>
        <div onClick={toggle}>
          {!dropdown ? (
            <FaBars color="white" size={25} />
          ) : (
            <AiOutlineClose color="white" size={25} />
          )}
        </div>
      </nav>

      <div
        className={`mobile_nav text-white border-b-2 border-slate-300 bg-secondary_bg cursor-pointer ${
          dropdown ? "active" : "inactive"
        }  `}
      >
        <ul className=" pl-5 bg-secondary_bg">
         <Link to="/"><li className="active_list p-5">Home</li></Link> 
          <Link to="/Landlord"><li className="p-5">Landlord</li></Link>
          <Link to="/Tenant"><li className="p-5">Tenant</li></Link>
          <Link to="/ContactUs"><li className="p-5">Contact Us</li></Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default Mobilenav;
