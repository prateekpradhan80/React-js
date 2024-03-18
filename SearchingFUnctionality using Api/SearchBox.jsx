import "./SearchBox.css";
import React, { useState, useEffect } from "react";
import SearchList from "./SearchList";
const SearchBox = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return user && user.name.toLowerCase().includes(input);
        });
        setUser(result);
        console.log(user);
      });
  }, [input]);
  return (
    <>
      <input
        className="input"
        value={input}
        placeholder=" 🔍Type here.... "
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchList items={user} />
    </>
  );
};

export default SearchBox;
