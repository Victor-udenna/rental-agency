import React, { Fragment, useState } from "react";
import Owners_card from "../Owners_card/Owners_card";
import Ownerdata from "../../data/Ownerdata";

const  Article =()=>{
   const  [initialDetial, setIntialDetail] = useState(Ownerdata[0])
    let card1 = Ownerdata[0]
    let card2 = Ownerdata[1]
    let card3 = Ownerdata[2]
return(
    <Fragment>
<section className=" pr-10 py-10 grid grid-col-1 lg:grid-cols-2 lg:py-28 lg:pr-20">
<div className=" bg-green-50 py-10  w-[100%]  lg:h-[336px] mt-10">
<Owners_card
role={initialDetial.role}
details={initialDetial.details}
image={initialDetial.image}
name={initialDetial.name}/>

<div className="flex text-center pl-10 lg:pl-20">
    <div className="w-[10px] rounded-full  bg-green-500 h-[10px]" onClick={()=> setIntialDetail(card1)}></div>
    <div className="w-[10px] rounded-full  bg-green-500 h-[10px] mx-3" onClick={()=> setIntialDetail(card2)}></div>
    <div className="w-[10px] rounded-full  bg-green-500 h-[10px]" onClick={()=> setIntialDetail(card3)}></div>
</div>
</div>
        <div className=" pl-10 mt-10 pb-16 h-[400px]   w-[100%] lg:pl-0">
        <iframe className=" iframe lg:w-[100%]" width="100%" height="100%" src="https://www.youtube.com/embed/zumJJUL_ruM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

</section>
    </Fragment>
);
}

export default Article;