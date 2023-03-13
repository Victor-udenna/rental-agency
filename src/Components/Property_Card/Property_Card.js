import React from "react";
import bathIcon from "../../assets/images/bathroom.png";
import bedIcon from "../../assets/images/bedroom.png";
import layer from "../../assets/images/layer.png";

const Property_Card = ({imageURL, address, roomtype, price, bed_no, bath_no, floor})=>{
    return(
        <div className=" pr-0 card_property w-[300px] h-[400px] flex flex-col justify-between mb-5 lg:mb-7 justify-between xl:w-[300px]">
            <div className="h-[60%]">
                <img className="h-[100%] w-[100%] rounded-t-xl" src={imageURL}/>
            </div>
      <div className=" px-3 border-x-2 border-b-2 border-slate-300 rounded-b-xl pb-3">
      <p className="text-lg font-bold py-5">{address}</p>
            <p className="text-sm text-slate-400">{roomtype}</p>
            <p className="text-orange-500 font-bold text-xl pb-3">{price}/month</p>
            <div className="flex justify-between items-center border-top-2 border-400">
                <div className=" grid grid-cols-2 gap-1 items-center">
             <span className="px-2"><img  src={bedIcon} alt=""/></span> <span>{bed_no}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 items-center">
                <span className="px-2"><img  src={bathIcon} alt=""/></span> <span>{bath_no}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 items-center">
                <span className="px-2"><img  src={layer} alt=""/></span> <span>{floor}</span>
                </div>
            </div>
      </div>
        </div>
    );
}
export default Property_Card;