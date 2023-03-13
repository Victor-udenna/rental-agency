import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Property_Card from "../Property_Card/Property_Card";

const Properties = () => {
  const [propertydata, setpropertydata] = useState([]);
  const [page, setpage] = useState(1)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/property_data?_page=${page}&_limit=6`)
      .then((response) => {
        setpropertydata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  console.log(page)
  return (
    <Fragment>
      <section className=" px-10 py-10 flex justify-between items-center lg:px-20">
        {" "}
        <h2 className="text-2xl font-bold py-4">
          <span className="border-b-4 border-green-500">List </span>Of
          Properties
        </h2>
 <Link to='/AllProperties'>       <button className="text-white bg-green-500  p-3 text-[10px] rounded-lg font-bold lg:text-[16px]">
          View Property
        </button></Link>
      </section>
      <div className="px-10 lg:px-20">
        <div className=" property_container py-10 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
        <ul className=" border-2 border-slate-200 text-white w-[300px]  mx-auto flex justiy-center items-center font-bold">
          <li className=" border-r-2 text-green-500 cursor-pointer w-[87px] h-[60px]  flex flex-col justify-center items-center hover:bg-green-500 hover:text-white"
          onClick={()=> setpage(page - 1)}>
            Prev
          </li>
          <li className=" border-r-2 text-green-500 cursor-pointer h-[60px] w-[45px]  flex flex-col justify-center items-center hover:bg-green-500 hover:text-white"
          onClick={()=> setpage(1)}>
            1
          </li>
          <li className=" border-r-2 text-green-500 cursor-pointer h-[60px] w-[45px]  flex flex-col justify-center items-center hover:bg-green-500 hover:text-white"
          onClick={()=> setpage(2)}>
            2
          </li>
          <li className=" border-r-2 text-green-500 bg-white cursor-pointer h-[60px] w-[42px]  flex flex-col justify-center items-center hover:bg-green-500 hover:text-white"
          onClick={()=> setpage(3)}>
            3
          </li>
          <li className="text-green-500 bg-white cursor-pointer w-[87px] h-[60px]  flex flex-col justify-center items-center hover:bg-green-500 hover:text-white"
          onClick={()=> setpage(page + 1)}>
            Next
          </li>
        </ul>
      </div>
 </Fragment>
  );
};

export default Properties;
  