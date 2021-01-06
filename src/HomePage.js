import React from "react";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HAT</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKET</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="subtile">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
