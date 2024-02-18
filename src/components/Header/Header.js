import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { cart, logo, searching, fav, profile } from "../../assets/images";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      alert("검색어를 입력해주세요");
    } else {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        <img src={searching} alt="Search" />
      </button>
    </form>
  );
};

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <h1 className="logoimage">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
      </div>

      <div className="bar">
        <div className="search">
          <SearchBar />
        </div>

        <div className="cart">
          <Link to="/basket" className="cart-link">
            <img src={cart} alt="Cart" />
          </Link>
        </div>
        <div className="fav">
          <Link to="/" className="fav-link">
            <img src={fav} alt="Fav" />
          </Link>
        </div>
        <div className="profile">
          <Link to="/" className="profile-link">
            <img src={profile} alt="Profile" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
