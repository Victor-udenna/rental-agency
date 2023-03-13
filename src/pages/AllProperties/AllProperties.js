import React, { Fragment, useEffect, useState } from "react";
import { NavBar, Footer, Article } from "../../Components";
import axios from "axios";
import Property_Card from "../../Components/Property_Card/Property_Card";

const AllProperties =()=>{
    const [propertydata, setpropertydata] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:5000/property_data`)
          .then((response) => {
            setpropertydata(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
<Fragment>
 <NavBar/>   
 <div className="px-10 lg:px-20">
    <h1 className="text-center font-bold text-green-500 text-2xl py-10 lg:text-left lg:py-16 lg:text-3xl">All Properties</h1>
        <div className=" property_container py-10 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-end">
          {propertydata?.map((items) => {
            return  (
              <Property_Card
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