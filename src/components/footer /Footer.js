import React from "react";
import { Icon } from "@iconify/react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="footer">
        <div className="halffooter1">
          <h1 className="contactustitle">Contact Us</h1>
          <div className="contactinfo">
            <div className="infoline">
              <div className="contacticon">
                <Icon icon="carbon:phone-filled" />
              </div>
              <h3 className="contactinfodetail">+91 903949057</h3>
            </div>
            <div className="infoline">
              <div className="contacticon">
                <Icon icon="ci:location" />{" "}
              </div>
              <h3 className="contactinfodetail">
                Katargam Shivdharshan apprtment Surat{" "}
              </h3>
            </div>
            <div className="infoline">
              <div className="contacticon">
                <Icon icon="ic:baseline-email" />{" "}
              </div>
              <h3 className="contactinfodetail">
                karnavativadapavsurat@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="halffooter2">
          <h1 className="contactustitle">About Us</h1>

          <div className="footeraboutinfo">
            <p className="aboutinfodetails">
              Our shop is highest rated fastfoos shop in entier surat katargam
              4.5 star on google map.serving vadapv to our customers since 2011
            </p>
            <div className="mediabtns">
              <button className="socialbtn">
                <Icon icon="fa6-brands:facebook-f" />
              </button>
              <button className="socialbtn">
                <Icon icon="akar-icons:twitter-fill" />
              </button>
              <button className="socialbtn">
                <Icon icon="bxl:instagram-alt" />{" "}
              </button>

              <button className="zomotofooterbtn">
                <a href="https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order">
                  <img
                    src="images/zomotobtn.png"
                    alt="zomotobtn"
                    className="zomofooterimg"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="footerline"></hr>
      <h3 className="copyright">
        Copyright © 2022 Karnavati vadapav. All rights reserved.
      </h3>
    </div>
  );
}
