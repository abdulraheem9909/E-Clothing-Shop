import React, { useState } from "react";
import SHOP_DATA from "../../collection-data";
import CollectionPreview from "../../components/Collection-Preview/CollectionPreview";

const Shop = () => {
  const [data, setData] = useState(SHOP_DATA);
 
  console.log(SHOP_DATA)
  return <div>
 { data ? data.map(({id, ...otherdata})=>{
    return (
      <CollectionPreview key={id} {...otherdata}/>
      )
  }):<></>}
  <CollectionPreview/>
  </div>;
};

export default Shop;
