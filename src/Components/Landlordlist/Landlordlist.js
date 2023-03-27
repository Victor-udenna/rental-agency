import React, { Fragment, useState, useEffect } from 'react';
import Landlord_card from '../Landlord_card/Landlord_card';
import Landlordlazyload from '../Landlordlazyload/Landlordlazyload';
import axios from 'axios';


 const Landlordlist = () => {

  const [landlorddata, setLandlordData] = useState([])
  const [lazyloading, setlazyloading] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/Landlord_data')
      .then((response) => {
        setLandlordData(response.data);
        setlazyloading(false)
      })
      .catch((error) => {
        console.log(error);
        setlazyloading(true)
      });
  }, []);


  return (
    <Fragment>
      <section className=' py-10 px-10 lg:py-20 lg:px-20'>
     
<h1 className='text-lg font-bold md:text-2xl lg:text-3xl text-green-500 pt-10 pb-20'>Top enrolled Landlords</h1>
        {/* <div className='flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3'> */}
        <div className="flex flex-wrap justify-center  items-center md:justify-between">

  { lazyloading ? <Landlordlazyload/> :  landlorddata?.map((items)=>{
    return(
      <Landlord_card
      key={items.id}
      name={items.Name}
      mail={items.email}
      avg_price={items.average_price}
      total_property={items.Total_property}
      rating={items.rating}
      profile_photo={items.Profile_imageURL}
      />
    )
  })}
        </div>
      </section>
    </Fragment>
  )
}

export default Landlordlist;
