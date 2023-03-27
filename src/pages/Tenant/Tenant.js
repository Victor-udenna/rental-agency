import React, { Fragment } from "react";
import { NavBar } from "../../Components";
import {Footer} from "../../Components";
import {Tenant_banner} from "../../Components";
import {Tenantlist} from "../../Components";


const Tenant =()=>{
    return(
        <Fragment>
            <NavBar/>
<Tenant_banner/>
<Tenantlist/>
<Footer/>
</Fragment>
    );
}

export default Tenant;