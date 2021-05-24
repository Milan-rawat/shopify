import React, { Component } from "react";
import "./Account.css";
import Header from "../../components/Header/Header";

import myprofile from "../../components/Images/myprofile.jpg";

class Account extends Component {
  render() {
    return (
      <>
        <div className="accountPage">
          <Header />
          <div className="myAccount">
            <div className="myProfile">
              <div className="myProfilePic">
                <img id="myProfilePhoto" src={myprofile} alt="My profile" />
              </div>
              <span id="myProfileDetails">
                Name: <input type="text" />
              </span>
              <span id="myProfileDetails">
                email: <input type="email" />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
