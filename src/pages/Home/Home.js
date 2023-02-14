import React, { Fragment } from 'react'
import NavBar from "../../Components/NavBar/NavBar";
import { Banner } from '../../Components';

 const Home = () => {
  return (
<Fragment>
<section className='m-0 p-0 bg-primary_bg'>
<NavBar/>
   <Banner/>
</section>
</Fragment>
  )
}

export default Home;
