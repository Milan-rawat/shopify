import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  render() {
    return (
      <div className="signinPage">
        <form onSubmit={this.handleSubmit}>
          <div className="signinPageHead">
            <span>Signin</span>
          </div>
          <div className="signinBox">
            <div className="inputEmail" id="inputfields">
              <label htmlFor="inputEmail">Email</label>
              <input className="textInput" id="inputEmail" type="email" />
            </div>
            <div className="inputPassword" id="inputfields">
              <label htmlFor="inputPassword">Password</label>
              <input className="textInput" id="inputPassword" type="password" />
            </div>
            <div className="rememberCheckbox" id="inputfields">
              <input id="rememberCheckbox" type="checkbox" />
              <label htmlFor="rememberCheckbox">Remember me</label>
            </div>
            <div className="signinButton" id="inputfields">
              <div id="signinButton">SIGN IN</div>
            </div>
          </div>
          <div className="signinOthers">
            <div className="forSignin" id="otherfields">
              <a id="signinLink" href="/user/signup">
                Don't have an account? Sign up
              </a>
            </div>
          </div>
          <div className="forCopy" id="otherfields">
            <span id="copyright">Copyright © Shopify 2021.</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
