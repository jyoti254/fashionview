import React,{useEffect} from "react";
// import Common from "./Common";
import "../App.css";
import { NavLink } from "react-router-dom";

const Welcome = () => {
    useEffect(() => {
        window.scrollTo({
            top:0,
            left: 0,
            behavior: 'smooth'
          });
    }, [])
  return (
    <>
      <div className="w2 col-10 mx-auto"  
      style={{
          marginTop:'2rem',
    display:'flex',
    flexDirection:'column',
          height:'100vh',
          backgroundImage:"url('https://i.pinimg.com/originals/d2/71/6d/d2716dea4a414595ad3e34eaa4d2928b.jpg')"}}>
        <h2 className=" mt-2 oredr-2  ">
          <strong> HI GIRLS! </strong> YOU'VE BEEN WARMED!
        </h2>
        <h3 className="w3">
          Best convenient <strong>Tips</strong> for you.
        </h3>
      
          <NavLink style={{textDecoration:'none'}} to="/home" className="btn-get-started">
          <button className="btn">

            Welcome
            </button>

          </NavLink>
      </div>
    </>
  );
};
export default Welcome;
