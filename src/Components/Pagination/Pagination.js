import React, { Fragment } from "react";

const Pagination = (totalPosts, postPerPage) =>{
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPosts / postPerPage); i++){
        pages.push(i)
    }
return(
<Fragment>
<div className="bg-red-500">
{pages.map((page, index)=>{
return <button className="bg-red-500 text-red-500" key={index}>{page}</button>
})}
</div>
</Fragment>
)
}
export default Pagination;