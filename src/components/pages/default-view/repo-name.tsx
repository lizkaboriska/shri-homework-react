import React, { Component } from "react";
import { connect } from "react-redux";
import { State, BranchState } from "../../../interfaces/stateInterface";

//TODO добавить время последнего изменения к веткам в дропе
interface Props {
  repo_name: string;
  branches: BranchState[];
}

class RepoName extends Component<Props, State> {
  render() {
    return (
      <div className="layout__container layout__container_indent-h_s">
        <div className="section">
          <div className="text text_size_m text_line_l">
            {this.props.repo_name}
          </div>
          <div className="dropdown">
            <div className="text text_size_m text_line_l text_color_grey text_indent-l_5">
              trunk
            </div>
            <div className="trunk-arrow" />
            <div className="dropdown__content ">
              <div className="dropdown__item trunk__item trunk__header">
                <div className="trunk__path">Trunk</div>
                <div></div>
              </div>
              {this.props.branches.map((branch: BranchState) => (
                <div key={branch.id} className="dropdown__item trunk__item">
                  <div className="trunk__path">{branch.name}</div>
                  <div className="trunk__time"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  branches: state.branches,
  repo_name: state.repository
});
export default connect(mapStateToProps)(RepoName);
