import React, { Component } from "react";
import "./Header.css";

class header extends Component {
  render() {
    return (
      <>
        <div className="Header">
          <div className="leftNav">
            <div className="burgerMenu_box">
              <i className="fa fa-bars" id="header_icon"></i>
            </div>
            <div className="logo_box">
              <i id="header_icon">Shopify</i>
            </div>
          </div>
          <div className="rightNav">
            <div className="search_box">
              <i className="fa fa-search" id="header_icon"></i>
            </div>
            <div className="wish_box">
              <i className="fa fa-heart" id="header_icon"></i>
            </div>
            <div className="cart_box">
              <i className="fa fa-shopping-cart" id="header_icon"></i>
            </div>
            <div className="account_box">
              <i className="fa fa-user" id="header_icon"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default header;
