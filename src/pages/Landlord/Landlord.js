import React, { Fragment } from "react";
import { NavBar } from "../../Components";
import {Footer} from "../../Components";

const Landlord =()=>{
    return(
        <Fragment>
<NavBar/>
<div className="flex flex-col items-center justify-center h-screen font-bold text-2xl bg-secondary_bg text-white ">
    Land lord page not availeble at the moment :(
</div>
<Footer/>
        </Fragment>
    );
}

export default  Landlord;