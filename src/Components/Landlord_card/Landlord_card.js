import React, { Fragment } from 'react'

 const Landlord_card = () => {
  return (
    <Fragment>
        <div className=' w-[320px] rounded my-10 mx-2 border-2 border-green-500 flex flex-col items-center'>
 <div className='p-7 border-b-2 border-green-100 w-[100%] flex justify-center items-center'><img className='w-[150px] h-[150px] rounded-full' src='https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVpc25lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'/></div>
 <div>

<p className='text-center text-2xl font-bold py-5'>Lynda lapid</p>

<div className='grid grid-cols-2 gap-5'>
<p className='pb-5'><span className='font-bold text-green-500'>Avg Price: </span>$1500</p>
<p className='pb-5'><span className='font-bold text-green-500'>Total Property:</span> 9</p>
</div>
<div className='flex flex-col justify-center items-center'>
    <p className='pb-5'><span className='font-bold text-green-500'>Mail: </span>lynala@gmail.com</p>
<p className='pb-5'><span className='font-bold text-green-500'>Rating:</span> ⭐⭐⭐⭐</p>
</div>
 </div>
        </div>
    </Fragment>
  )
}

export default  Landlord_card;
