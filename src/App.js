import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages';
import { Tenant } from './pages';
import {ContactUs} from "./pages";
import {AllProperties} from "./pages";
import {Landlord} from "./pages"

function App() {
  return (
   <Fragment>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Tenant' element={<Tenant/>}/>
  <Route path='/ContactUs' element={<ContactUs/>}/>
  <Route path='/AllProperties' element={<AllProperties/>}/>
  <Route path='/Landlord' element={<Landlord/>}/>
 </Routes>
   </Fragment>
  );
}

export default App;
