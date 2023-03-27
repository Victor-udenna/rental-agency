import React, { Fragment } from "react";
import { NavBar } from "../../Components";
import {Footer} from "../../Components";
import {Tenant_banner} from "../../Components";
import {Tenantlist} from "../../Components";


const Tenant =()=>{
    return(
        <Fragment>
<section className="w-[100%]">
<NavBar/>
<Tenant_banner/>
<Tenantlist/>
<Footer/>
</section>
</Fragment>
    );
}

export default Tenant;