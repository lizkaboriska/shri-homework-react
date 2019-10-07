import React, { Component } from "react";
import "./App.css";
//import "../../git-http-api/html-layout/style.css"
//import "./dropdown.css";
import Layout from "./components/layout";
import { connect } from 'react-redux';


class App extends Component {
  // TODO когда приходит стейт для каждой страницы?
  render() {
    return (
      <div className="theme theme_color_default">
        <div className="layout ">
          <Layout/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps)(App);
