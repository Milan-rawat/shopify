import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="signupPage">
        <div className="signupPageHead">
          <span>Signup</span>
        </div>
        <div className="signupBox">
          <div className="inputName" id="inputfields">
            <label htmlFor="inputName">Full Name</label>
            <input
              className="textInput"
              id="inputName"
              type="text"
              placeholder="ex:John"
            />
          </div>
          <div className="inputEmail" id="inputfields">
            <label htmlFor="inputEmail">Email</label>
            <input
              className="textInput"
              id="inputEmail"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div className="inputPassword" id="inputfields">
            <label htmlFor="inputPassword">Password</label>
            <input className="textInput" id="inputPassword" type="password" />
          </div>
          <div className="agreeCheckbox" id="inputfields">
            <input id="agreeCheckbox" type="checkbox" />
            <label htmlFor="agreeCheckbox">
              I accept all the terms & conditions.
            </label>
          </div>
          <div className="signupButton" id="inputfields">
            <div id="signupButton">SIGNUP</div>
          </div>
        </div>
        <div className="signupOthers">
          <div className="forSignin" id="otherfields">
            <a id="signinLink" href="/user/signin">
              Already have an account? Sign in
            </a>
          </div>
        </div>
        <div className="forCopy" id="otherfields">
          <span id="copyright">Copyright © Shopify 2021.</span>
        </div>
      </div>
    );
  }
}

export default Signup;
