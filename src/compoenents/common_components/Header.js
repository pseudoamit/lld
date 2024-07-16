import React from "react";
import "./Header.css";

const Header = ({ changeLanguage }) => {
  const onChangeHandler = (e) => {
    changeLanguage(e?.target?.value);
  };

  return (
    <header className="header-container">
      <div>Logo</div>
      <div className="right-menu-wrapper">
        <nav className="navbar-container">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/team">Team</a>
          <a href="/about">About</a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Nested Comment</a>
          <a href="/image-slider">Image SLider</a>
        </nav>
        <select onChange={onChangeHandler}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
