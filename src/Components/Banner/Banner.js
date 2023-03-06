import React, { Fragment } from 'react';
import {Map} from "../../Components";

 const Banner = () => {


  return (
    <Fragment>
      <div className=' px-10 bg-secondary_bg h-[60vh] pt-5  text-white text-center  lg:h-[100vh]  lg:flex justify-between items-center lg:px-20  '>
<div className=''>
<p className=' text-justify py-10 text-2xl md:text-3xl lg:text-[52px] font-bold md:leading-relaxed  text-center'>
  The most affortable 
  <br/>
  place to stay in the
  <br/> san franciso bay area</p>
</div>



<div className='map_container'>
 <Map/>
</div>



</div>

    </Fragment>
  )
}

export default Banner;
