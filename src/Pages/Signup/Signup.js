import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.name.split(" ")[0],
        lastName: this.state.name.split(" ")[1],
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.confirmPassword,
      }),
    });

    const response = JSON.parse(await res.text());
    console.log(response);
  };

  render() {
    return (
      <div className="signupPage">
        <form onSubmit={this.handleSubmit}>
          <div className="signupPageHead">
            <span>Signup</span>
          </div>
          <div className="signupBox">
            <div className="inputName" id="inputfields">
              <label htmlFor="inputName">Full Name</label>
              <input
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                className="textInput"
                id="inputName"
                type="text"
                placeholder="ex:John"
              />
            </div>
            <div className="inputEmail" id="inputfields">
              <label htmlFor="inputEmail">Email</label>
              <input
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className="textInput"
                id="inputEmail"
                type="email"
                placeholder="abc@xyz.com"
              />
            </div>
            <div className="inputPassword" id="inputfields">
              <label htmlFor="inputPassword">Password</label>
              <input
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                className="textInput"
                id="inputPassword"
                type="password"
              />
            </div>
            <div className="confirmPassword" id="inputfields">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={this.state.confirmPassword}
                onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })
                }
                className="textInput"
                id="confirmPassword"
                type="password"
              />
            </div>
            <div className="agreeCheckbox" id="inputfields">
              <input id="agreeCheckbox" type="checkbox" />
              <label htmlFor="agreeCheckbox">
                I accept all the terms & conditions.
              </label>
            </div>
            <div className="signupButton" id="inputfields">
              <button id="signupButton" type="submit">
                SIGN UP
              </button>
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
        </form>
      </div>
    );
  }
}

export default Signup;
