import React, { Fragment } from "react";
import Options_card from "../Options_card/Options_card";


const Options =()=>{
    return(
<Fragment>
<section className=" px-10 flex justify-between flex-col py-20 lg:grid grid-cols-2 gap-10 lg:py-40 lg:px-20">
<div className=" w-[100%]">
<Options_card/>
    </div>
    <section className="flex-col place-self-center">
        <h2 className="font-bold pb-3 text-lg md:text-2xl lg:text-3xl pb-5">Flexibility and options to suit your lifestyle.</h2>
        <p className="pb-5 text-justify leading-7">
        You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
        </p>
        <button className="text-white bg-orange-500 p-3 rounded-lg font-bold">
            Search Rooms
        </button>
    </section>
</section>
</Fragment>
    );
}


export default Options;

