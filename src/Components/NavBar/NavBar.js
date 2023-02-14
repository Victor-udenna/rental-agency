import React, { Fragment } from "react";
import DesktopNav from "../DesktopNav/DesktopNav";
import Mobilenav from "../Mobilenav/Mobilenav";

const NavBar = () => {
  return (
    <Fragment>

<div className="md:hidden">
        <Mobilenav />
      </div>
      <div className="hidden md:block">
        {" "}
        <DesktopNav />
      </div>
    </Fragment>
  );
};

export default NavBar;
