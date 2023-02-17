import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Property_Card from "../Property_Card/Property_Card";

const Properties = ()=>{

const [propertydata, setpropertydata] = useState([]);
const [loading, setloading] = useState(true)

    useEffect(()=>{
   axios.get("http://localhost:5000/property_data")
   .then((response)=>{
    setpropertydata(response.data)
    setloading(false)
   })
   .catch((error)=>{
    console.log(error)
   })
    },
         [])

    return(
      <Fragment>
<h2 className="text-2xl font-bold py-4"><span className="border-b-4 border-orange-500">List </span>Of Properties</h2>
<div className="">
<div className="py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-end">
{propertydata?.map((items)=>{
  return(
  propertydata.length <= 6 ?   <Property_Card
    key={items.id}
    roomtype={items.roomType}
    address={items.address}
    floor={items.floor}
    bed_no={items.bedroom}
    bath_no={items.bathroom}
    imageURL={items.imageURL}
    price={items.price}
    /> : "move to the next page"
  )
})}
</div>
</div>
      </Fragment>
    );
}

export default Properties;