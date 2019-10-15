import React, { Component } from "react";
import "./App.css";
import Layout from "./components/layout";
import { State } from "./interfaces/stateInterface";

class App extends Component<{}, State> {
  render() {
    return (
      <div className="theme theme_color_default">
        <div className="layout ">
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
