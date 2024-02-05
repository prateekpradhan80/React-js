import React from "react";
import Item from "./Items";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Items List</h2>
      {items.map((item, index) => (
        <Item key={index} name={item} />
      ))}
    </div>
  );
};
export default ItemList;