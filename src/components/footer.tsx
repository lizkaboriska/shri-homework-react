import React, { Component } from "react";
import { State } from "../interfaces/stateInterface";

class Footer extends Component<{}, State> {
  render() {
    return (
      <div className="layout__container layout__container_size_full">
        <div className="footer">
          <div className="text text_size_xs text_line_l text_color_footer">
            Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia,
            119021.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
