import React, { Fragment, useState } from "react";
import InputField from "../../Components/InputField/InputField";
import SelectOption from "../../Components/SelectOption/SelectOption";
import SelectData from "../../data/SelectData";
import AddImg from "../AddImg/AddImg";

const AddProperty = () => {
  let city = SelectData.city;
  let State = SelectData.state;
  let roomType = SelectData.roomtype;
  const handleSelect = (e) => {
    console.log(e.target.value);
  };
  return (
    <Fragment>
      <p className="text-center text-lg md:text-xl">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>

     <section>
       <p className="font-bold text-orange-500 text-lg md:text-xl lg:text-2xl text-center py-7 md:py-10 lg:py-20">Add A New Property</p>
     <div className="input_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <InputField id="name" label="Name" type="text" />
        <InputField id="surname" label="Surname" type="number" />
        <InputField id="unitnumber" label="Unit number" type="number" />

        <div>
          <label className="font-bold" htmlFor="state">Select City<span className="text-orange-500"> *</span></label>
          <br />
          <select
            id="state"
            className=" mt-3 mb-5 rounded-[5px] input_items border-2 border-[#DDDDDD] w-[120px]"
          >
            <option value="">Select City</option>
            {city.map((items) => {
              return (
                <SelectOption
                  value={items.value}
                  label={items.label}
                  key={items.id}
                />
              );
            })}
          </select>
        </div>
        <div>
          <label className="font-bold" htmlFor="city">Select state<span className="text-orange-500"> *</span></label>
          <br />
          <select
            id="city"
            className=" mt-3 mb-5 rounded-[5px] input_items border-2 border-[#DDDDDD] w-[120px] "
          >
            <option value="">Select State</option>
            {State.map((items) => {
              return (
                <SelectOption
                  value={items.value}
                  label={items.label}
                  key={items.id}
                />
              );
            })}
          </select>
        </div>
        <div>
          <label className="font-bold" htmlFor="room_type">Room type<span className="text-orange-500"> *</span></label>
          <select
            id="room_type"
            className=" mt-3 mb-5 rounded-[5px] input_items border-2 border-[#DDDDDD] w-[120px]"
          >
            <option>Select room type</option>
            {roomType.map((items) => {
              return (
                <SelectOption
                  value={items.value}
                  label={items.label}
                  key={items.id}
                />
              );
            })}
          </select>
        </div>
        <InputField id="price" label="Price" type="text" />
        <InputField id="floor" label="Number of Floor(s)" type="number" />
      </div>
      <div>
        <label className="font-bold" htmlFor="description">Description <span className="text-orange-500"> *</span></label>
        <br/>
        <textarea id="description" className=" px-2 rounded-[5px] mt-3 mb-5 w-[100%] h-[200px] border-2 border-[#DDDDDD]"></textarea>
     </div>
    <AddImg/>
    <button className="text-white bg-orange-500 p-3 rounded-lg font-bold my-10">Add New Property</button>
     </section>
    </Fragment>
  );
};

export default AddProperty;
