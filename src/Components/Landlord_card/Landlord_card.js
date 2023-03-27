import React, { Fragment } from 'react'

 const Landlord_card = ({name, avg_price, total_property, mail, rating, profile_photo}) => {
  return (
    <Fragment>
        <div className=' w-[320px] rounded my-10 mx-2 border-2 border-slat-300 flex flex-col items-center'>
 <div className='p-7 border-b-2 border-green-100 w-[100%] flex justify-center items-center'><img className='w-[150px] h-[150px] border-4 border-green-500 rounded-full' src={profile_photo}/></div>
 <div>
<p className='text-center text-2xl font-bold py-5'>{name}</p>

<div className='grid grid-cols-2 gap-5'>
<p className='pb-5'><span className='font-bold text-green-500'>Avg Price: </span>{avg_price}</p>
<p className='pb-5'><span className='font-bold text-green-500'>Total Property: </span>{total_property}</p>
</div>
<div className='flex flex-col justify-center items-center'>
    <p className='pb-5'><span className='font-bold text-green-500'>Mail: </span>{mail}</p>
<p className='pb-5'><span className='font-bold text-green-500'>Rating:</span>{rating}</p>
</div>
 </div>
        </div>
    </Fragment>
  )
}

export default  Landlord_card;
