import React, { Fragment } from 'react'
import NavBar from "../../Components/NavBar/NavBar";
import { AddProperty, Banner } from '../../Components';
import {Features} from "../../Components";
import {Properties} from "../../Components";
import {Options} from "../../Components";


 const Home = () => {
  return (
<Fragment>
<section className='m-0 p-0 overflow-hidden'>
<NavBar/>
<Banner/>
<Features/>
<Properties/>
<Options/>
<AddProperty/>
</section>
</Fragment>
  )
}

export default Home;
