import React, { Component } from "react";
import "./Account.css";
import Header from "../../components/Header/Header";

class Account extends Component {
  render() {
    return (
      <>
        <div className="accountPage">
          <Header />
          <h1>My Account</h1>
        </div>
      </>
    );
  }
}

export default Account;
