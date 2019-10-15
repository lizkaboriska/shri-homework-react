import React, { Component } from "react";
import { State } from "../../../../interfaces/stateInterface";

interface Props {
  lines: string[];
}

class CodeView extends Component<Props, State> {
  render() {
    let lines = this.props.lines;

    return (
      <>
        {lines.map(function(line: string, index: number) {
          return (
            <div className="code-view__row" key={index}>
              <div className="code-view__cell code-view__count">{index}</div>
              <div className="code-view__cell">{line}</div>
            </div>
          );
        })}
      </>
    );
  }
}

export default CodeView;
