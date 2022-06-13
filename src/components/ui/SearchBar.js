import React, { useState } from "react";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  const toggleShowSearchBar = () => {
    if (window.innerWidth <= 768) {
      setShow((show) => !show);
    }
  };

  return (
    <div className={`search-bar ${show ? "show" : ""}`}>
      <button className="search__btn">
        {show ? (
          <i className="bi bi-arrow-left" onClick={toggleShowSearchBar}></i>
        ) : (
          <i className="bi bi-search-heart" onClick={toggleShowSearchBar}></i>
        )}
      </button>
      <input type="text" name="search-bar" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
