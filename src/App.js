import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Component/Service";
import About from "./Component/About";
import Home from "./Component/Home";
import ContactUs from "./Component/ContactUs";
import Navbar from "./Component/Navbar";
import { Switch , Route, } from "react-router";
import Welcome from "./Component/Welcome";
// import "./App.css";


const App = ()=>{
  
  return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path ="/" component={Welcome} />
          <Route exact path ="/home" component={Home} />         
          <Route exact path ="/service" component= {Service}/>
          <Route exact path ="/contactus" component={ContactUs}/>
          <Route exact path ="/about" component={About}/>
        </Switch>
       </>
       
    );
}
export default App;