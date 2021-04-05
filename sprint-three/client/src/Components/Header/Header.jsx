import React from "react";
import Logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <section className="header__rightside">
        <div className="header__logo">
          <Link to="/">
            <img id="logo" src={Logo} alt="BrainFlix Logo" />
          </Link>
        </div>
      </section>
      <section className="header__leftside">
        <div className="header__searchbar">
          <div id="searchIcon"></div>
          <input id="searchBar" type="text" placeholder="Search" />
        </div>
        <div className="header__upload--btn">
          <Link to="/upload">
            <div className="upload__button">
              <div id="uploadBtnIcon"></div>
              <button id="upload__btn" type="button" name="button">
                UPLOAD
              </button>
            </div>
          </Link>
        </div>
        <div className="header__user">
          <div className="header__user--img"></div>
        </div>
      </section>
    </div>
  );
}

export default Header;
