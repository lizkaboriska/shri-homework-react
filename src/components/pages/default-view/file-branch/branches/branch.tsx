import React, { Component } from "react";
import { State } from "../../../../../interfaces/stateInterface";

interface Props {
  branch: PropsBranch;
}

interface PropsBranch {
  name: string;
  sha: string;
}

class Branch extends Component<Props, State> {
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

//export default Branch;
export default Branch;
