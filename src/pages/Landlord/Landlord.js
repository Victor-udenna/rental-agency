import React, { Fragment } from "react";
import { NavBar } from "../../Components";
import {Footer} from "../../Components";
import {Landlord_banner} from "../../Components";
import { Landloardlist } from "../../Components";

const Landlord =()=>{
    return(
        <Fragment>
<NavBar/>
<Landlord_banner/>
<Landloardlist/>
<Footer/>
        </Fragment>
    );
}

export default  Landlord;