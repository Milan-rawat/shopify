import React, { Component } from "react";
import "./Header.css";

class header extends Component {
  render() {
    return (
      <>
        <div className="Header">
          <div className="upperNav">
            <div className="burgerMenu_box">
              <i>menu</i>
            </div>
            <div className="logo_box">
              <i>Shopify</i>
            </div>
            <div className="search_box">
              <i>Search</i>
            </div>
            <div className="cart_box">
              <i>Cart</i>
            </div>
            <div className="account_box">
              <i>Account</i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default header;
