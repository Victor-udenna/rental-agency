import React, { Fragment } from 'react';
import mapImg from "../../assets/images/Rectangle 1.png";

 const Banner = () => {
  return (
    <Fragment>
      <div className=' bg-secondary_bg h-[80vh] pt-5 md:px-10 text-white text-center  lg:h-[100vh]  lg:flex justify-between items-center lg:py-0 '>
<div className=''>
<p className=' py-10 text-2xl md:text-3xl lg:text-[52px] font-bold md:leading-relaxed  text-center'>
  The most affortable 
  <br/>
  place to stay in the
  <br/> san franciso bay area</p>
</div>



<div className=''>
 <img src={mapImg} alt="" className='w-[403px] h-[340px] mx-auto'/>
</div>

</div>

    </Fragment>
  )
}

export default Banner;
