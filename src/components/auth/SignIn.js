import React, { Component } from "react";
import SignInForm from "./SignInForm";

class SignIn extends Component {
  // this will handle our submission and we do not have to pass e.prevent Default
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

export default SignIn;
