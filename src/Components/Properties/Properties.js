import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Property_Card from "../Property_Card/Property_Card";
import Pagination from "../Pagination/Pagination";

const Properties = () => {
  const [propertydata, setpropertydata] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
// set current page
  const [postperpage, setPostPerpage] = useState(6);
// controls the numbers of post perpage

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

  const lastPostIndex = currentPage * postperpage;
  const firstpostindex = lastPostIndex - postperpage;
  const currentPost = propertydata.slice(firstpostindex, lastPostIndex);

  return (
    <Fragment>
      <section className="py-10 flex justify-between items-center">
        {" "}
        <h2 className="text-2xl font-bold py-4">
          <span className="border-b-4 border-orange-500">List </span>Of
          Properties
        </h2>
        <button className="text-white bg-orange-500 p-5 rounded-lg">
          View All Property
        </button>
      </section>
      <div className="">
        <div className="py-10 px-5 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-end">
          {currentPost?.map((items) => {
            return propertydata.length ? (
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
            ) : (
              "move to the next page"
            );
          })}
        </div>

        <ul className=" border-2 border-slate-200 text-white w-[300px]  mx-auto flex justiy-center items-center font-bold">
          <li className=" border-r-2 text-orange-500 cursor-pointer w-[87px] h-[60px]  flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white">
            Prev
          </li>
          <li className=" border-r-2 text-orange-500 cursor-pointer h-[60px] w-[45px]  flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white">
            1
          </li>
          <li className=" border-r-2 text-orange-500 cursor-pointer h-[60px] w-[45px]  flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white">
            2
          </li>
          <li className=" border-r-2 text-orange-500 bg-white cursor-pointer h-[60px] w-[42px]  flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white">
            3
          </li>
          <li className="text-orange-500 bg-white cursor-pointer w-[87px] h-[60px]  flex flex-col justify-center items-center hover:bg-orange-500 hover:text-white">
            Next
          </li>
        </ul>
      </div>
<Pagination/>
 </Fragment>
  );
};

export default Properties;
  