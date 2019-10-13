import React, { Component } from "react";
import { connect } from "react-redux";
import { StateInterface } from "../../../../../interfaces/stateInterface";

class Branch extends Component<any> {
  render() {
    return (
      <div>
        <div className="list__container">
          <div className="list__item list__br-name">
            <div className="branch-icon"></div>
            <div>{this.props.branch.name}</div>
          </div>
          <div className="list__item list__full-hash">
            <div>{this.props.branch.sha}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  files: state.files
});

//export default Branch;
export default connect(mapStateToProps)(Branch);
