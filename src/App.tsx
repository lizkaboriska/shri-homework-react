import React, { Component } from "react";
import "./App.css";
//import "../../git-http-api/html-layout/style.css"
//import "./dropdown.css";
import Layout from "./components/layout";
import { connect } from "react-redux";
import { StateInterface } from "./interfaces/stateInterface";

class App extends Component {
  // TODO когда приходит стейт для каждой страницы?
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

const mapStateToProps = (state: StateInterface) => ({
  state: state
});

export default connect(mapStateToProps)(App);
