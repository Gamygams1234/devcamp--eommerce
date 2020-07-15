import React, { Component } from "react";
import Navbar from "./headernavbar/navbar";
import Header from "./headernavbar/header";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {...this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;
