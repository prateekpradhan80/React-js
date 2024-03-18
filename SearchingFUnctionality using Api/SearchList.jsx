import React from "react";

const SearchList = ({ items }) => {
  return (
    <div>
      {items.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  );
};

export default SearchList;
