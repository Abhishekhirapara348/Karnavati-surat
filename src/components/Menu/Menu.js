import React from "react";
import { useState } from "react";
import "./menu.css";
import MenuBeverage from "../Menu-items/MenuBeverage";
import Menuvadapav from "../Menu-items/Menuvadapav";
import { Icon } from "@iconify/react";

export default function Menu() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="menucontainer">
      <div className="titlearea">
        <h1 className="menutile">Menu </h1>
      </div>

      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <Icon icon="mdi-light:hamburger" className="iconvada" />
            Vdapav
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <Icon icon="fluent:drink-to-go-24-regular" className="iconvada" />
            Beverage
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Menuvadapav />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <MenuBeverage />
          </div>
        </div>
      </div>
    </div>
  );
}
