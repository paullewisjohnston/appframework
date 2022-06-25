import React from 'react'
import { HashRouter, Routes, Route} from "react-router-dom"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Signup from './pages/auth/Signup.js'
import Signin from './pages/auth/Signin.js'
import LandingPage from './pages/dynamic/LandingPage'
import DetailPage from './pages/dynamic/DetailPage'
import GoCardless from './pages/payment/GoCardless'
import GoCardlessRedirect from './pages/payment/GoCardlessRedirect'
import GoCardlessSuccess from './pages/payment/GoCardlessSuccess'
import GoCardlessFailed from './pages/payment/GoCardlessFailed'
import dataSiteConfig from './assets/data/dataSiteConfig';
import dataHome from './assets/data/dataHome';
import dataSubscription from './assets/data/dataSubscription';
import useMediaQuery from '@mui/material/useMediaQuery';

import './App.css'

function App(){
  const desktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  return(
  <div sx="App" style={{overflowX:'clip'}}>
    <HashRouter>
      <Header dataSiteConfig={dataSiteConfig} desktop={desktop}/>
        <Routes>
          {/* Menu routes*/}
          <Route path="/" element={<LandingPage data={dataHome} desktop={desktop}/>}/>
          <Route path="/latest" element={<LandingPage data={dataHome} desktop={desktop}/>}/>
          <Route path="/download" element={<LandingPage data={dataHome} desktop={desktop}/>}/>
          <Route path="/store" element={<LandingPage data={dataHome} desktop={desktop}/>}/>

          {/* Footer routes*/}
          <Route path="/contact" element={<LandingPage data={dataHome} desktop={desktop}/>}/>

          {/* Dynamic Pages */}
          <Route path="/items" element={<LandingPage data={dataHome} desktop={desktop}/>}>
            <Route path=":id" element={<DetailPage data={dataHome} desktop={desktop}/>}/>
          </Route>

          {/* Authentication routes */}
          <Route path="/signup" element={<Signup/>} desktop={desktop}/>
          <Route path="/signin" element={<Signin/>} desktop={desktop}/>

          {/* Subscription & Payment routes */}
          <Route path="/subscription" element={<LandingPage data={dataSubscription}/>} desktop={desktop}/>
          <Route path="/gocardless" element={<GoCardless />}/>
          <Route path="/gocardless-redirect" element={<GoCardlessRedirect />} desktop={desktop}/>
          <Route path="/gocardless-success" element={<GoCardlessSuccess />} desktop={desktop}/>
          <Route path="/gocardless-failed" element={<GoCardlessFailed />} desktop={desktop}/>
        </Routes>
      <Footer dataSiteConfig={dataSiteConfig} desktop={desktop}/>
    </HashRouter>
  </div>
  );
}
export default App;
