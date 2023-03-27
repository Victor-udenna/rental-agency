import React, { Fragment } from "react";
import { NavBar } from "../../Components";
import {Banner} from "../../Components";
import {Footer} from "../../Components";
import {InputField} from "../../Components";
import {FaPaperPlane} from 'react-icons/fa';


const ContactUs =()=>{
    return(
<Fragment>
<NavBar/>
<Banner/>

<section className=" pt-10 px-10 lg:px-20 lg:pt-28 mb-20">
<section className="form_container">
       <p className="font-bold text-green-500 text-lg md:text-xl lg:text-2xl text-center py-7 md:py-10 lg:py-20 lg:text-start">Contact Us</p>
     <div className="input_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <InputField id="name" label="Name" type="text" />
        <InputField id="surname" label="Surname" type="text" />
        <InputField id="mail" label="Email" type="email" />
        <InputField id="phone" label="Phone Number" type="tel" />
        <InputField id="subject" label="Subject" type="text" />
      </div>
      <div>
        <label className="font-bold" htmlFor="description">Message <span className="text-orange-500"> *</span></label>
        <br/>
        <textarea id="description" className=" px-2 rounded-[5px] mt-3 mb-5 w-[100%] h-[200px] border-2 border-[#DDDDDD]"></textarea>
     </div>
    <button className=" flex  items-center text-white bg-green-500 p-3 rounded-lg font-bold my-10">Send <span className="pl-2"><FaPaperPlane/></span></button>
     </section>
</section>
<Footer/>
</Fragment>
    );

}

export default ContactUs;