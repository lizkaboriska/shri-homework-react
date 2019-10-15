import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Inner from "./pages/default-view/inner";
import { State } from "../interfaces/stateInterface";

class Layout extends Component<{}, State> {
  render() {
    return (
      <>
        <Header />

        <Inner />
        <Footer />
      </>
    );
  }
}

export default Layout;
