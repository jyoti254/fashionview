import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Component/Service";
import About from "./Component/About";
import Home from "./Component/Home";
import ContactUs from "./Component/ContactUs";
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import Ser1 from "./Component/Ser1";
import { Switch , Route, Redirect, } from "react-router";

const App = ()=>{
  
  return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path ="/fashionview" component={Welcome} />
          <Route exact path ="/home" component={Home} /> 
          <Route exact path="/service" component={Service} />      
          <Route  path ="/service/traditional" component= {Ser1}/>
          <Route  path ="/service/gown" component= {Ser1}/>
          <Route  path ="/service/cool" component= {Ser1}/>
          <Route  path ="/service/shorts" component= {Ser1}/>
          <Route  path ="/service/funkey" component= {Ser1}/>
          <Route  path ="/service/onePiece" component= {Ser1}/>
          <Route  path ="/service/midi" component= {Ser1}/>
          <Route  path ="/service/western" component= {Ser1}/>
          <Route exact path ="/contactus" component={ContactUs}/>
          <Route exact path ="/about" component={About}/>
          <Redirect path="/welcome" component={Welcome}/>
        </Switch>
       </>
       
    );
}
export default App;