import React, { Fragment, useState, useEffect } from 'react';
import Landlord_card from '../Landlord_card/Landlord_card';
import axios from 'axios';


 const Landlordlist = () => {

  const [landlorddata, setLandlordData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/Landlord_data')
      .then((response) => {
        setLandlordData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <Fragment>
      <section className='px-10 lg:px-20'>
<h1 className='text-lg font-bold md:text-2xl lg:text-3xl text-green-500 py-10'>Top enrolled Landlords</h1>
        <div className='flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3'>
  {landlorddata?.map((items)=>{
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
