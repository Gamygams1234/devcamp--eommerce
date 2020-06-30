import React, { Component } from "react";
import Navbar from "./headernav/navbar";
import Header from "./headernav/header";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {" "}
        {...this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;
