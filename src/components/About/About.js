import React from "react";
import "./about.css";
import { BsArrowRight } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BiMessageAltEdit } from "react-icons/bi";

export default function About() {
  return (
    <div>
      <div className="aboutcontainer">
        <div className="about">
          <h1 className="titleabout">About Us</h1>
        </div>
        <div className="aboutsection">
          <div data-aos="fade-right" className="card1">
            <div className="half1">
              <h2 className="info">
                <span style={{ color: "#FFE900" }}>Best Fastfood </span>shop in
                surat katargam
              </h2>
              <button className="directionbtn">
                Get Direction <BsArrowRight />
              </button>
            </div>
            <div className="half2">
              <img src="images/card1img.png" alt="logo" className="cardimg" />
            </div>
          </div>
          <div data-aos="fade-left" className="card2">
            <div className="card2half1">
              <h2 className="info">
                Hot and Spicy vadapav starting at just
                <span style={{ color: "#63dd04" }}> Rs. 20</span>
              </h2>
              <button className="cardmenubtn">
                Explore Menu <BsArrowRight />
              </button>
            </div>
            <div className="card2half2">
              <img src="images/card2img.png" alt="logo" className="cardimg2" />
            </div>
          </div>
          <div data-aos="fade-right" className="card3">
            <div className="card3half1">
              <h2 className="info">
                Top rated Fastfood shop in Surat katargam.
              </h2>
            </div>
            <div className="card3half2">
              <div className="reviewsection">
                <div className="stars">
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarFill className="star" />
                  <BsStarHalf className="star" />
                </div>
                <div className="review">
                  <button className="reviewbtn">
                    Write A Review <BiMessageAltEdit />
                  </button>
                </div>
              </div>
              <div className="imgsize">
                <img
                  src="images/card3img.png"
                  alt="logo"
                  className="cardimg3"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="card4">
            <div className="card4half1">
              <img src="images/card4img.png" alt="logo" className="cardimg4" />
            </div>
            <div className="card4half2">
              <h1 className="infocard4">Karnavati Vadapav surat since 2011</h1>
              <p className="card4para">
                Our shop is highest rated fastfoos shop in entier surat katargam
                4.5 star on google map.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
