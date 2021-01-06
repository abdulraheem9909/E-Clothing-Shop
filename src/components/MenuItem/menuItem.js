import React from "react";
import "./menuItem.scss";

const menuItem = (props) => {
  return (
    <div  className={`${props.size} menu-item`}>
    <div style={{background:`url(${props.imageUrl})`}} className="background"></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default menuItem;
