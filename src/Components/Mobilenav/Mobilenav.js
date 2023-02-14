import React, { Fragment, useState } from "react";
import logo from "../../assets/images/logo 1.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Mobilenav = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdown);
  console.log(dropdown);

  return (
    <Fragment>
      <nav className="bg-primary_bg flex items-center justify-between  py-5">
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
        className={`mobile_nav ${
          dropdown ? "active" : "inactive"
        } my-4 mx-2 rounded-md`}
      >
        <ul>
          <li className="active_list p-5">Home</li>
          <li className="p-5">Landloard</li>
          <li className="p-5">Tenant</li>
          <li className="p-5">Contact Us</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Mobilenav;
