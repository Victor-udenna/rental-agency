import React, { Fragment, useEffect, useState } from "react";
import { NavBar, Footer, Article } from "../../Components";
import axios from "axios";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import {LazyloadingComponent} from "../../Components";

const AllProperties =()=>{
    const [propertydata, setpropertydata] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        axios
          .get(`http://localhost:5000/property_data`)
          .then((response) => {
            setpropertydata(response.data);
            setloading(false)
          })
          .catch((error) => {
            console.log(error);
            setloading(true)
          });
      }, []);

    return(
<Fragment>
 <NavBar/>   
 <div className="px-10 lg:px-20">
    <h1 className="text-center font-bold text-green-500 text-2xl py-10 lg:text-left lg:py-16 lg:text-3xl">All Properties</h1>
   
        <div className="flex flex-wrap justify-center  items-center md:justify-between">
          {loading ?  <LazyloadingComponent/> : propertydata?.map((items) => {
            return  (
              <PropertyCard
                key={items.id}
                roomtype={items.roomType}
                address={items.address}
                floor={items.floor}
                bed_no={items.bedroom}
                bath_no={items.bathroom}
                imageURL={items.imageURL}
                price={items.price}
              />
            ) 
          })}
        </div>
      </div>
<Article/>
<Footer/>
</Fragment>
    );
}

export default AllProperties;