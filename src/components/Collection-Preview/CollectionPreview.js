import React from "react";
import Collectionitems from "../Collectionitem/Collectionitem"
import "./CollectionPreview.scss"

const CollectionPreview = ({ title, items }) => {
  //console.log(items)
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items ? (
          items.filter((items,index)=>index<4).map(({id, ...otherdata}) => {
            return <Collectionitems key={id} {...otherdata}> </Collectionitems>;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CollectionPreview;
