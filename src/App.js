import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
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

import './App.css'

function App(){
  return(
  <div sx="App" style={{overflowX:'clip'}}>
    <BrowserRouter>
      <Header dataSiteConfig={dataSiteConfig}/>
        <Routes>
          {/* Menu routes*/}
          <Route path="/" element={<LandingPage data={dataHome}/>}/>
          <Route path="/latest" element={<LandingPage data={dataHome}/>}/>
          <Route path="/download" element={<LandingPage data={dataHome}/>}/>
          <Route path="/store" element={<LandingPage data={dataHome}/>}/>
          <Route path="/signup" element={<LandingPage data={dataHome}/>}/>

          {/* Footer routes*/}
          <Route path="/contact" element={<LandingPage data={dataHome}/>}/>

          {/* Dynamic Pages */}
          <Route path="/items" element={<LandingPage data={dataHome}/>}>
            <Route path=":id" element={<DetailPage data={dataHome}/>}/>
          </Route>

          {/* Authentication routes */}
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>

          {/* Subscription & Payment routes */}
          <Route path="/subscription" element={<LandingPage data={dataSubscription}/>}/>
          <Route path="/gocardless" element={<GoCardless />}/>
          <Route path="/gocardless-redirect" element={<GoCardlessRedirect />}/>
          <Route path="/gocardless-success" element={<GoCardlessSuccess />}/>
          <Route path="/gocardless-failed" element={<GoCardlessFailed />}/>
        </Routes>
      <Footer dataSiteConfig={dataSiteConfig} />
    </BrowserRouter>
  </div>
  );
}
export default App;
