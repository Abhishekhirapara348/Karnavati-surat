import React from "react";
import "./hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="herosection">
      <div className="herobg">
        <div className="hero-container">
          <h1 className="welcome">Welcome to</h1>
          <h1 className="shopname">
            Karnavati Vadapav <span className="spansurat"> Surat</span>
          </h1>
          <h1 className="tagline">
            The right kind of fried bun with yummy vada and spicy green chutney
          </h1>
          <div className="menuarea">
            <button className="expolremenubtn">
              Expore our Menu <HiOutlineChevronRight />
            </button>
          </div>

          <img
            src="images/backgroundimg.png"
            alt="logo"
            className="bgimgkarnavati"
          />
        </div>
      </div>
    </div>
  );
}
