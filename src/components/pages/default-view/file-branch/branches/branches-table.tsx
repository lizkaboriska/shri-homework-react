import React, { Component } from "react";
import Branch from "./branch";
import { connect } from "react-redux";
import { State, BranchState } from "../../../../../interfaces/stateInterface";
import { Action } from "../../../../../reducers/reducer";

interface Props {
  active_tab: string;
  branches: BranchState[];
  dispatch: (action: Action) => void;
}

class BranchesTable extends Component<Props, State> {
  changeToFiles = () => {
    this.props.dispatch({ type: "CHANGE_TO_FILES", content: "" });
  };
  render() {
    if (this.props.active_tab === "branches") {
      return (
        <>
          <div className="layout__container layout__container_indent-h_s">
            <div className="section section_underline_grey section_indent-t_10">
              <div
                onClick={this.changeToFiles}
                className="text text_size_s text_line_m text_weight_bold text_color_grey tab"
              >
                FILES
              </div>
              <div className="text text_size_s text_line_m text_weight_bold text_indent-l_30 section__selected-item tab">
                BRANCHES
              </div>
            </div>
            <div className="section">
              <div className="list">
                <div className="list__container list__container_header">
                  <div className="list__item list__br-name">Name</div>
                  <div className="list__item list__full-hash">
                    <div>Commit hash</div>
                  </div>
                </div>
                {this.props.branches.map((branch: BranchState) => (
                  <Branch key={branch.id} branch={branch} />
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

const mapStateToProps = (state: State) => ({
  active_tab: state.active_tab,
  branches: state.branches
});
export default connect(mapStateToProps)(BranchesTable);
