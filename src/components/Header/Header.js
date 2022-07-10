import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="burgerbtn">
        <a href="/">
          <HiOutlineMenuAlt2 className="menu-icon" />
        </a>
      </div>
      <header className="headerarea">
        <div className="halfheader">
          <img src="images/logo.png" alt="logo" className="heder-logo" />
        </div>
        <div className="halfheader2">
          <ul className="ullist">
            <li>
              <a
                href="https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                className="tab"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/" className="tab">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="tab">
                Menu
              </a>
            </li>
            <li>
              <a href="/" className="tab">
                Direction
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
