import React from "react";
import Card from "./Card";
import { ServiceData } from "./Constants/ServiceData";
// import "./App.css";

const Service = () => {
  return (
    <>
      <div className="my-5  ">
        <h2 className="h4 text-center  ">
          <i>
            Here is best<b> ASSEMBLAGE </b>for you.
          </i>
        </h2>
      </div>
      <div className="container-fluid mb=5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-8 gx-4">
            {
                    
                    ServiceData.map((item)=>{
                        return(
                          <Card
                          url ={item.url}
                            imgsrc={item.imgsrc}
                            alt={item.alt}
                            title={<strong>{item.title}</strong>}
                            text={item.text}
                          />)
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
