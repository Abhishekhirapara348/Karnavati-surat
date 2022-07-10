import React from "react";
import "./service.css";

export default function Service() {
  return (
    <div className="servicecontainer">
      <div className="servicearea">
        <h1 className="servicecardtitle">Our Service</h1>
      </div>

      <div className="servicecards">
        <artical data-aos="zoom-in-right" className="servicecard">
          <div className="half1scard">
            <img
              src="images/foodcardimg.png"
              alt="hello"
              className="icon1service"
            />
          </div>
          <div className="half2scard">
            <h1 className="servicetitle">Quality Food</h1>
            <p className="servicediscription">
              We serve hyganic and quality food to our customers since 2011
            </p>
          </div>
        </artical>
        <artical data-aos="zoom-out" className="servicecard">
          <div className="half1scard">
            <img
              src="images/foodcardimg.png"
              alt="hello"
              className="icon1service"
            />
          </div>
          <div className="half2scard">
            <h1 className="servicetitle">Big Orders</h1>
            <p className="servicediscription">
              we Take big order and bulk orders acording to your need just
              contact us 24 hour before
            </p>
          </div>
        </artical>
        <artical data-aos="zoom-in-left" className="servicecard">
          <div className="half1scard">
            <img src="images/truck.png" alt="hello" className="icon2service" />
          </div>
          <div className="half2scard">
            <h1 className="servicetitle">Online Delivery </h1>
            <p className="servicediscription">
              Our customers can order food online from zomoto
            </p>
          </div>
        </artical>
      </div>
    </div>
  );
}
