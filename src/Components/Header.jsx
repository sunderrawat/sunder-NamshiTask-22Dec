import React from "react"
import "./Header.css";

function Header(){
    return (
      <div className="header">
        <nav className="nav">
          <div className="nav__left">
            <img
              src="https://www.sigaramtech.com/images/logo.png"
              alt=""
              className="logo"
            />
            <div className="header__details">
              <h2 className="header__title">Sigaram Shop</h2>
                <p className="header__addr">
                  No 9. 11th Cross Street, Indira Nagar, Adyar Chennai, TN -
                  600020
                </p>
            </div>
          </div>
          <ul className="nav__right">
            <li className="nav__item">Contact Us</li>
            <li className="nav__item">Cart</li>
            <li className="nav__item">My Account</li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;