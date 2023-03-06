import React, { Fragment } from 'react';

const FeatureCard = ({cardImg, topText, bottomText}) =>{
return(
    <Fragment>
        <div>
<div className=' shadow-2xl bg-white flex justify-center items-center rounded-lg w-[77px] h-[77px]'>
    <img className='w-[50px] lg:w-[40px]' src={cardImg}/>
</div>
<div className='font-bold text-xl text-secondary_bg'>
    <p className='text-sm lg:text-lg py-1'>{topText}<br/>
    {bottomText}</p>
</div>
        </div>
    </Fragment>
);
}

export default FeatureCard;