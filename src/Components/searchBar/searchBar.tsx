import { observer } from "mobx-react";
import React, { useState } from "react";
import { rootStores } from "../../Stores/main";
import { SearchProps } from "../../types/props";
import { IoCloseOutline } from "react-icons/io5";
import "./serachBar.css";
const { userStore } = rootStores;

const SearchBar = (props: SearchProps) => {
  const { getAllUsers, allUsers } = userStore;

  const handleSearch = () => {
    const results = allUsers.filter((u) => {
      return u.name.includes(props.value.state);
    });
    props.result.setState!(results);
  };
  const handleClear = () => {
    props.value.setState!("");
  };

  return (
    <div className="search-bar">
      <div className="search-bar-input-div">
        <input
          className="search-bar input"
          type="text"
          placeholder="Search"
          value={props.value.state}
          onChange={(e) => {
            props.value.setState!(e.target.value);
            handleSearch();
          }}
        />
        {props.value.state !== "" && (
          <IoCloseOutline className="search-bar-close" onClick={handleClear} />
        )}
      </div>
    </div>
  );
};

export default observer(SearchBar);
