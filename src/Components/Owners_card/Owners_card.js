import React, { Fragment } from "react";


const Owners_card = ({role, details, image, name })=>{
    return(
        <Fragment>
       <div className="flex pl-10 pb-5  flex-col w-[80%] lg: pl-20">
            <p  className=" leading-7 text-justify">{details}</p>
            <div className="flex items-center gap-3"> 
                <div>
                <img className='rounded-full w-[60px] h-[60px] border-2 border-orange-500 mt-9 mb-2' src={image}/>
                </div>
                <div className="pt-7">
                    <h4 className="text-sm font-bold text-orange-500">{name}</h4>
                    <p className="text-[12px] font-bold">{role}</p>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Owners_card;