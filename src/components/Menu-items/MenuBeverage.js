import React from "react";
import "./menubeverage.css";

export default function MenuBeverage() {
  return (
    <div className="beveragecontainer">
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/orangeimg.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname">
            <span className="card1name">Favrito Juicy Orange </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/apple.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname">
            <span className="card2name">Favrito Juicy Apple </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/jeera.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname">
            <span className="card3name">Favrito Jeera Masti </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/lemon.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname">
            <span className="card4name">Favrito Lemon Mojito </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/cola.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname2">
            <span className="card5name">Favrito Cola Punch </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="beveragecard">
        <div className="half1bev">
          <img src="images/power.png" alt="hi" className="colddrinkimg" />
        </div>
        <div className="half2bev">
          <h2 className="drinkname">
            <span className="card6name">Favrito Power Punch </span>
          </h2>
          <div className="pricetag">RS.20</div>
        </div>
      </article>
    </div>
  );
}
