import React, { Fragment } from 'react'
import NavBar from "../../Components/NavBar/NavBar";
import { Banner } from '../../Components';
import {Features} from "../../Components";


 const Home = () => {
  return (
<Fragment>
<section className='m-0 p-0 overflow-hidden'>
<NavBar/>
<Banner/>
<Features/>
</section>
</Fragment>
  )
}

export default Home;
