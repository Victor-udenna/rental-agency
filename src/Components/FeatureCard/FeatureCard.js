import React, { Fragment } from 'react';

const FeatureCard = ({cardImg, topText, bottomText}) =>{
return(
    <Fragment>
        <div>
<div className=' shadow-2xl bg-white flex justify-center items-center rounded-lg w-[77px] h-[77px]'>
    <img src={cardImg}/>
</div>
<div className='font-bold text-xl text-secondary_bg'>
    <p>{topText}<br/>
    {bottomText}</p>
    
</div>
        </div>
    </Fragment>
);
}

export default FeatureCard;