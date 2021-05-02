import React, { Component } from "react";
import "./Header.css";
import { stack as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";

class header extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  render() {
    return (
      <>
        <Menu
          customBurgerIcon={false}
          customCrossIcon={false}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          width={"280px"}
        >
          <div className="sidemenuHead">
            <h1>Image</h1>
          </div>
          <a
            onClick={() => this.closeMenu()}
            id="home"
            className="menu-item"
            href="/"
          >
            Home
          </a>
          <a
            onClick={() => this.closeMenu()}
            id="account"
            className="menu-item"
            href="/user/account"
          >
            Account
          </a>
          <a
            onClick={() => this.closeMenu()}
            id="wishlist"
            className="menu-item"
            href="/wishlist"
          >
            Wishlist
          </a>
          <a
            onClick={() => this.closeMenu()}
            id="cart"
            className="menu-item"
            href="/cart"
          >
            Cart
          </a>
          <a
            onClick={() => this.closeMenu()}
            id="about"
            className="menu-item"
            href="/about"
          >
            About
          </a>
          <a
            onClick={() => this.closeMenu()}
            id="contact"
            className="menu-item"
            href="/contact"
          >
            Contact
          </a>
          <a
            onClick={() => this.closeMenu()}
            // onClick={this.showSettings}
            className="menu-item--small"
            href=""
          >
            Settings
          </a>
        </Menu>

        <div className="Header">
          <div className="leftNav">
            <div className="burgerMenu_box">
              <i
                className="fa fa-bars"
                id="header_icon"
                onClick={() => this.toggleMenu()}
              ></i>
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
              <a href="/user/wishlist">
                <i className="fa fa-heart" id="header_icon" />
              </a>
            </div>
            <div className="cart_box">
              <a href="/user/cart">
                <i className="fa fa-shopping-cart" id="header_icon" />
              </a>
            </div>
            <div className="account_box">
              <a href="/user/account">
                <i className="fa fa-user" id="header_icon" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default header;
