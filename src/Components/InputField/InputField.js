import React, { Fragment } from "react";

const InputField =({id, label, type})=>{
    return(
<Fragment>
<div className="pb-5">
<label htmlFor={id} className="flex font-bold pb-3">
{label} <span className="text-orange-500 pl-1">*</span>
</label>
<input id={id} className=" px-2 border-[#DDDDDD] rounded-[5px] border-red border-2 input_items" type={type} name="name" />
</div>
</Fragment>
    );

}

export default InputField;