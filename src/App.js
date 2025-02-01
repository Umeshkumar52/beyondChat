import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Registration from './pages/Registration'
import Login from './pages/Login'
import OrganizationSetup from "./pages/OrganizationSetup";
import IntegrateWeb from "./pages/IntegrateWeb";
import TestWebIntegration from "./pages/OrganizationSetup";
import IntegrateSucces from "./pages/IntegrateSucces";
import Successfull from './components/Successfull'
import IntegrateWebsite from './components/IntegrateWebsite'
import GoogleAuth from "./components/GoogleAuth";
import OtpComponents from "./components/OtpComponents";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Registration/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path="/test" element={<TestWebIntegration/>}/>
      <Route path="/webintegrate" element={<IntegrateWeb/>}/>
      <Route path="/success" element={<Successfull/>}/>
      <Route path="/orgnizationsetup" element={<OrganizationSetup/>}/>
      <Route path="/websetup" element={<IntegrateWebsite/>}/>
      <Route path="/auth" element={<GoogleAuth/>}/>
      <Route path="/otpAuth" element={<OtpComponents/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
