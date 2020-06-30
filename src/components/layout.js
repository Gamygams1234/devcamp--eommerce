import React, { Component } from "react";
import Navbar from "./headernav/navbar";
import Header from "./headernav/header";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Navbar />
        {...this.props.children}
      </div>
    );
  }
}

export default Layout;
