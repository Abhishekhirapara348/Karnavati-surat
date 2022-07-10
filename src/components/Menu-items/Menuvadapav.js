import React from "react";
import "./menuvadapav.css";

export default function Menuvadapav() {
  return (
    <div className="vadapavcontainer">
      <article data-aos="zoom-in-up" className="vadacard1">
        <div className="half1card">
          <img
            src="/images/classicvadapav1.png"
            alt="classic"
            className="card1img"
          />
        </div>
        <div className="half2card">
          <div className="name">
            <h4 className="itemname">classic vadapav</h4>
            <img src="/images/vegicon.png" alt="veg" className="vegicon" />
          </div>
          <div className="infoarea">
            <h3 className="infovadapav">
              Classic Vadapav with a delectable vada filled with potatoes and
              tasty indian spices with oil fried bun
            </h3>
            <div className="orderarea">
              <button
                className="zomotobtn"
                onClick={() => {
                  window.open(
                    "https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                  );
                }}
              >
                order now on
                <img
                  src="images/zomotobtn.png"
                  alt="zomoto"
                  className="zomotoimg"
                />
              </button>
              <div className="price">
                <h3 className="price-tag">RS.20</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="vadacard1">
        <div className="half1card">
          <img
            src="images/mayonnaisevadapav.png"
            alt="classic"
            className="card1img"
          />
        </div>
        <div className="half2card">
          <div className="name">
            <h4 className="itemname">Mayonnaise Vadapav</h4>
            <img src="/images/vegicon.png" alt="veg" className="vegicon" />
          </div>
          <div className="infoarea">
            <h3 className="infovadapav">
              Vadapav with a delectable vada filled with potatoes and tasty
              indian spices with oil fried bun and Mayonnaise
            </h3>
            <div className="orderarea">
              <button
                className="zomotobtn"
                onClick={() => {
                  window.open(
                    "https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                  );
                }}
              >
                order now on
                <img
                  src="images/zomotobtn.png"
                  alt="zomoto"
                  className="zomotoimg"
                />
              </button>
              <div className="price">
                <h3 className="price-tag">RS.30</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="vadacard1">
        <div className="half1card">
          <img
            src="images/cheesevadapavimg.png"
            alt="classic"
            className="card3img"
          />
        </div>
        <div className="half2card">
          <div className="name">
            <h4 className="itemname">Cheese Vadapav</h4>
            <img src="/images/vegicon.png" alt="veg" className="vegicon" />
          </div>
          <div className="infoarea">
            <h3 className="infovadapav">
              Vadapav with a delectable vada filled with potatoes and tasty
              indian spices with oil fried bun and cheese
            </h3>
            <div className="orderarea">
              <button
                className="zomotobtn"
                onClick={() => {
                  window.open(
                    "https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                  );
                }}
              >
                order now on
                <img
                  src="images/zomotobtn.png"
                  alt="zomoto"
                  className="zomotoimg"
                />
              </button>
              <div className="price">
                <h3 className="price-tag">RS.40</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article data-aos="zoom-in-up" className="vadacard1">
        <div className="half1card">
          <img src="images/schezwan.png" alt="classic" className="card1img" />
        </div>
        <div className="half2card">
          <div className="name">
            <h4 className="itemname">Schezwan Vadapav</h4>
            <img src="/images/vegicon.png" alt="veg" className="vegicon" />
          </div>
          <div className="infoarea">
            <h3 className="infovadapav">
              Classic Vadapav with a delectable vada filled with potatoes and
              tasty indian spices with schezwan chutney
            </h3>
            <div className="orderarea">
              <button
                className="zomotobtn"
                onClick={() => {
                  window.open(
                    "https://www.zomato.com/surat/karnavati-vadapav-center-1-katargam/order"
                  );
                }}
              >
                order now on
                <img
                  src="images/zomotobtn.png"
                  alt="zomoto"
                  className="zomotoimg"
                />
              </button>
              <div className="price">
                <h3 className="price-tag">RS.30</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
