import React, { Fragment } from 'react';
import {Map} from "../../Components";

 const Banner = () => {


  return (
    <Fragment>
      <div className=' bg-secondary_bg h-[90vh] pt-5 md:px-10 text-white text-center  lg:h-[100vh]  lg:flex justify-between items-center  '>
<div className=''>
<p className=' py-10 text-2xl md:text-3xl lg:text-[52px] font-bold md:leading-relaxed  text-center'>
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
