import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tenantlist = () => {

  const [tenantdata, setTenantdata] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/tenant_data")
    .then((response)=>{
setTenantdata(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <div>
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
{tenantdata.map((items)=>{
return( 
  <tr className='text-center tr' key={items.id}>
<td>{items.Name}</td>
<td>{items.property_id}</td>
<td>{items.Price}</td>
<td>{items.location}</td>
{<td>{items.status && <span className='text-green-500 bg-green-100 px-5'>Paid</span> || <span className='text-red-500 bg-red-100 px-1'>Pending</span>}</td>}
</tr>
)
})}
  {/* <tr className='text-center'>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
</tbody>

<tfoot>
</tfoot>
      </table>
    </div>
  )
}

export  default Tenantlist
