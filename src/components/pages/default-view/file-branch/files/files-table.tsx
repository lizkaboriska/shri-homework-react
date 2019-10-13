import React, { Component } from "react";
import File from "./file";
import { connect } from "react-redux";

class FilesTable extends Component<any> {
  changeToBranches = () => {
    this.props.dispatch({ type: "CHANGE_TO_BRANCHES" });
  };
  render() {
    if (this.props.active_tab === "files") {
      return (
        <>
          <div className="layout__container layout__container_indent-h_s">
            <div className="section section_underline_grey section_indent-t_10">
              <div className="text text_size_s text_line_m text_weight_bold section__selected-item tab">
                FILES
              </div>
              <div
                onClick={this.changeToBranches}
                className="text text_size_s text_line_m text_weight_bold text_color_grey text_indent-l_30 tab"
              >
                BRANCHES
              </div>
            </div>
            <div className="section">
              <div className="list">
                <div className="list__container list__container_header">
                  <div className="list__item list__name">Name</div>
                  <div className="list__item list__brunch">Brunch</div>
                  <div className="list__item list__hash">Commit</div>
                  <div className="list__item list__message">Commit message</div>
                  <div className="list__item list__author">Committer</div>
                  <div className="list__item list__time">Updated</div>
                </div>
                {this.props.files.map((file: any) => (
                  <File key={file.id} file={file} />
                ))}
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
const mapStateToProps = (state: any) => ({
  files: state.files,
  active_tab: state.active_tab
});
export default connect(mapStateToProps)(FilesTable);
