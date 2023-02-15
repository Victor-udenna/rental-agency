import React, { Fragment } from 'react'
import NavBar from "../../Components/NavBar/NavBar";
import { Banner } from '../../Components';
import {Features} from "../../Components";


 const Home = () => {
  return (
<Fragment>
<section className='m-0 p-0 overflow-hidden'>
<div className='banner h-[100vh] relative bg-banner_bgImage bg-no-repeat bg-cover bg-center bg-auto'>
<NavBar/>
<Banner/>
</div>
<Features/>
</section>
</Fragment>
  )
}

export default Home;
