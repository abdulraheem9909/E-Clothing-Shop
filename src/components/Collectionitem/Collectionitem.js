import React from "react";
import "./Collectionitem.scss";

const Collectionitem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="image"
      style={{background:`url(${imageUrl})`}}>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default Collectionitem;
