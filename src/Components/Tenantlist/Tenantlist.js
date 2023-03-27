import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableLazyloading from '../TableLazyloading/TableLazyloading';

const Tenantlist = () => {

  const [tenantdata, setTenantdata] = useState([])
  const [lazyloading, setlazyloading] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:5000/tenant_data")
    .then((response)=>{
setTenantdata(response.data)
setlazyloading(false)
    }).catch((error)=>{
      console.log(error)
      setlazyloading(true)
    })
  }, [])


  return (
    <section>
      <div className=' py-10 px-10 lg:py-20 lg:px-20'>
      <h1 className='text-lg font-bold md:text-2xl lg:text-3xl text-green-500 pt-10 pb-20'>All registered tenant</h1>
      </div>
      <table className='w-[100%]'>
<thead>
<tr className='t_header'>
    <th>Name</th>
    <th>Property id</th>
    <th>Price </th>
    <th>Location</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>

{ lazyloading ? <TableLazyloading/> : tenantdata.map((items)=>{
return( 
  <tr className='text-center tr' key={items.id}>
<td>{items.Name}</td>
<td>{items.property_id}</td>
<td>{items.Price}</td>
<td>{items.location}</td>
<td>{items.status && <span className='text-green-500 bg-green-100 px-5'>Paid</span> || <span className='text-red-500 bg-red-100 px-1'>Pending</span>}</td>
</tr>
)
})}
</tbody>

<tfoot>
</tfoot>
      </table>
    </section>
  )
}

export  default Tenantlist
