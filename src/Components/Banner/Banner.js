import React, { Fragment } from 'react';
import mapImg from "../../assets/images/Rectangle 1.png";

 const Banner = () => {
  return (
    <Fragment>
      <div className='bg-primary_bg h-[100vh] md:px-10 text-white  flex flex-col items-center justify-center  md:flex-row justify-between items-center'>

<div className=''>
<p className=' text-2xl md:text-3xl lg:text-4xl font-bold md:leading-relaxed leading-relaxed text-center'>
  The most affortable 
  <br/>
  place to stay in the
  <br/> san franciso bay area</p>
</div>



<div className=''>
 <img src={mapImg} alt="" className='w-[403px] h-[340px]'/>
</div>

</div>

    </Fragment>
  )
}

export default Banner;
