import React, { Fragment } from "react";
import {AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram, AiOutlineGooglePlus, AiTwotonePrinter} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {ImPinterest2} from "react-icons/im";
import {HiLocationMarker} from "react-icons/hi";
import {TiWiFi} from "react-icons/ti"
import {BsFillTelephoneFill} from "react-icons/bs";


const Footer =()=> {
    return(
      <Fragment>
    <footer className="  px-10 pt-28 pb-10 border-t-2 border-green-500 text-sm lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2">
    <p className="text-4xl font-bold pb-10">Logo</p>
    <div>
        <p className="flex items-center gap-1 pb-10"><span className="text-green-500"><HiLocationMarker/></span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
        <div> 
            <div className=" pb-10 flex item-center gap-20">
                <p className="flex items-center gap-1"><span className="text-green-500"><BsFillTelephoneFill/></span>(123) 456-7890</p>
                <p className="flex items-center gap-1"><span className="text-green-500"><AiTwotonePrinter/></span>(123) 456-7890</p>
            </div>

<div className=" pb-10 flex flex-col items-center gap-5 lg:flex-row">
<p className="text-slate-400">Social Media</p>
            <ul className=" flex md:flex-row gap-5 text-green-500">
                <li><AiFillFacebook size={20}/></li>
                <li><AiOutlineTwitter size={20}/></li>
                <li><GrLinkedinOption size={20}/></li>
                <li><AiFillYoutube size={20}/></li>
                <li><AiOutlineInstagram size={20}/></li>
                <li><AiOutlineGooglePlus size={20}/></li>
                <li><ImPinterest2 size={20}/></li>
                <li><TiWiFi size={20}/></li>
            </ul>
</div>
        </div>
    </div>
</div>
<div className=" border-t-2 border-slate-200  pt-10 flex  flex-col lg:flex-row item-center justify-between">
    <ul className=" pb-10 grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <li>About us</li>
        <li>Contact us</li>
        <li>Help</li>
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
    </ul>

    <p className="text-slate-400">Copyright © 2020 Minimumlivingcost. All rights reserved</p>
</div>
    </footer>
      </Fragment>
    );
}

export default Footer;