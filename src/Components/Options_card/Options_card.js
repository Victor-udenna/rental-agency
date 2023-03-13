import React from "react";
import {BsDiamondFill} from 'react-icons/bs'

const options_card =()=> {
    return(
<div className="mb-10">
<div className="options_card bg-Option_bg bg-center bg-cover bg-no-repeat py-10 rounded-lg">
<ul className="text-lg font-bold text-white z-10 relative">
<li className=" pl-4 leading-10 flex items-center py-7"><span><BsDiamondFill className="text-green-500"/></span> <span className="pl-2">Flexible Leases</span></li>
<li className=" pl-4 leading-10 flex items-center pb-7"><span><BsDiamondFill className="text-green-500"/></span><span className="pl-2">7-Day Happiness Guaranteed</span></li>
<li className=" pl-4 leading-10 flex items-center pb-7"><span><BsDiamondFill className="text-green-500"/></span><span className="pl-2">Monthly House Cleaning</span></li>
<li className=" pl-4 leading-10 flex items-center pb-7"><span><BsDiamondFill className="text-green-500"/></span><span className="pl-2">Choose Your Own Roommate</span></li>
</ul>
</div>
</div>
    );
}

export default options_card;