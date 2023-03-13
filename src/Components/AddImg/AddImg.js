import React from "react";

const AddImg = () =>{
    return(
        <div>
        <label className="font-bold pb-3" htmlFor="upload">Upload photos <span className="text-orange-500">*</span></label>
        <br/>
<div className=" mt-3 mb-5 flex flex-col items-center justify-center border-dashed p-2 font-bold text-sm border-2 border-green-500 h-[120px] rounded-[5px]">
    <p className="py-2">Drag your images here, <span className="text-green-500">or browse</span></p>
    <p className="pb-2 text-[11px]">Supported:  JPG, JPEG, PNG</p>
<input type="file"
       id="upload" name="img"
       accept="image/png, image/jpeg" className=""></input>
</div>
    </div>
    );
}

export default AddImg;