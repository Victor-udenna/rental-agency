import React from "react";
import featureImg from "../../assets/images/feature.png";
import FeatureCard from "../FeatureCard/FeatureCard";
import cardimg1 from "../../assets/images/dollar.svg";
import cardimg2 from "../../assets/images/buildings.svg";
import cardimg3 from "../../assets/images/layers.svg";
import cardimg4 from "../../assets/images/flower3.svg";
import cardimg5 from "../../assets/images/shield.svg";
import cardimg6 from "../../assets/images/eye.svg";

const Features = () =>{
    return(
<section className="py-20 px-10 md:px-20">
<p className=" pb-20 text-secondary_bg leading-relaxed font-bold py-10 text-xl md:text-2xl lg:text-3xl"><span className="span border-b-2 border-green-500">Minimun living Cost </span>
 Takes Care Of Everything</p>

 <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">


<div className="w-[100%]">
    <img src={featureImg} className='feature_img w-[100%] h-auto lg:w-[580px] h-[360px]'/> 
</div>


<div className="grid  grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
<FeatureCard
cardImg={cardimg1}
topText="Pay As Little"
bottomText="As Possible"/>
<FeatureCard
cardImg={cardimg2}
topText='Enjoy Wisdom'
bottomText='Of Commnity'/>
<FeatureCard
cardImg={cardimg3}
topText="Let's somebody else"
bottomText="take care of Landlord!"/>
<FeatureCard
cardImg={cardimg4}
topText="Enjoy peaceful"
bottomText="Environment!"/>
<FeatureCard
cardImg={cardimg5}
topText='Stay Safe!'
bottomText="Save Money!"/>
<FeatureCard
cardImg={cardimg6}
topText='Pay for what'
bottomText="you use !"/>
</div>


{/* <img src='' alt='' className="w-[400px]"/> */}
 </div>
</section>
    )
}

export default Features