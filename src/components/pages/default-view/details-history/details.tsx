import React, { Component } from "react";
import { connect } from "react-redux";

import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { StateInterface } from "../../../../interfaces/stateInterface";

class Details extends Component<any> {
  changeToHistory = () => {
    this.props.dispatch({ type: "CHANGE_TO_HISTORY" });
  };

  render() {
    //console.log(this.props.file_details);
    if (this.props.active_tab === "details") {
      return (
        <>
          <div className="layout__container layout__container_indent-h_s">
            <div className="section section_underline_grey section_indent-t_10">
              <div className="text text_size_s text_line_m text_weight_bold section__selected-item tab">
                DETAILS
              </div>
              <div
                onClick={this.changeToHistory}
                className="text text_size_s text_line_m text_weight_bold text_indent-l_30 text_color_grey tab"
              >
                HISTORY
              </div>
            </div>
          </div>
          <div>
            <div className="layout__container code">
              <div className="code-viewer">
                <div className="code-viewer__header">
                  <div className="code-viewer__name">
                    <div className="code-icon"></div>
                    <div>{this.props.file_details.filename}</div>
                    <div className="code-viewer__file-size">(4347 bytes)</div>
                  </div>
                  <div className="code-viewer__download-btn">
                    <div className="download-icon"></div>
                  </div>
                </div>
                <SyntaxHighlighter
                  style={xcode}
                  showLineNumbers={true}
                  wrapLines={true}
                  language={"cpp"}
                >
                  {this.props.file_details.lines.join("\n")}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return "";
    }
  }
}

/*
Fast handcrafted way of showing code (no highlighting support):

import CodeView from "./code-view";

<div className="code-view section">
    <div className="code-view__table">
        <CodeView
            lines={this.props.file_details.lines}
        />
    </div>
</div>
 */

const mapStateToProps = (state: StateInterface) => ({
  active_tab: state.active_tab,
  file_details: state.file_details
});

export default connect(mapStateToProps)(Details);
