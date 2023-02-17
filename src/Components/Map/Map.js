import React, { Fragment } from 'react'
import {BsSearch} from 'react-icons/bs';

const Map = () => {
  return (
<Fragment>
<div className=''>
<div className="rounded-xl">
      <iframe
      className='rounded-xl relative'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509169.493950534!2d-123.80033628862634!3d37.19297457489476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sng!4v1676492406901!5m2!1sen!2sng"
        width="340"
        height="403"
        style={{ border: "0" }}
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
 
    <div className='mt-5 rounded-xl p-3 bg-white flex items-center'>

    <select className='text-secondary_bg h-[58px] border-2 border-slate-300 p-1 rounded-tl-lg rounded-bl-lg'>
  <option value="">All types</option>
  <option value="">Not Available</option>
</select>

<select className='text-secondary_bg h-[58px] border-2 border-l-0 border-slate-300 p-1'>
  <option value="">Neighborhood</option>
  <option value="">Not Available</option>
</select>

<button className='bg-blue-400 w-[59px] h-[58px] flex justify-center items-center rounded-br-lg rounded-tr-lg'>
  <BsSearch/>
</button>
    </div>
</div>
</Fragment>
  )
}

export default Map;
