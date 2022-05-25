// import logo from "./logo.svg";

// import React, { useState, useEffect } from "react";

// /*
//  node_modules/react/index.js

//  export default React
//  export {useState, useEffect}
// */

import users from "./data/users.json";
import "./App.css";
import { useEffect, useState } from "react";
import { Users } from "./components/Users";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleChange = (e) => {
    // e === event
    /*
        event = {
          ...,
          target: {
            type: input,
            value: 
          }
        }

    */
    setSearch(e.target.value);
  };

  useEffect(() => {
    // take the search input
    // check if the search input is part of the user's name
    const filtered = users.filter((user) => user.name.includes(search));
    setFilteredUsers(filtered);
  }, [search]);

  return (
    <div className='App'>
      <Search search={search} setSearch={setSearch} />
      <Users filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
