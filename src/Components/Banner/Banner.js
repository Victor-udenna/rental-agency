import React, { Fragment } from 'react';
import mapImg from "../../assets/images/Rectangle 1.png";

 const Banner = () => {
  return (
    <Fragment>
      <div className='h-[100vh] pb-10 pt-5 md:px-10 text-white text-center  lg:flex justify-between items-center lg:py-0 '>
<div className='z-20'>
<p className=' z-20 relative text-2xl md:text-3xl lg:text-4xl font-bold md:leading-relaxed leading-relaxed text-center'>
  The most affortable 
  <br/>
  place to stay in the
  <br/> san franciso bay area</p>
</div>



<div className='z-20 relative'>
 <img src={mapImg} alt="" className='w-[403px] h-[340px] mx-auto'/>
</div>

</div>

    </Fragment>
  )
}

export default Banner;
