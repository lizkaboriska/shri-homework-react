import React, { Component } from "react";

class CodeView extends Component<any> {
  render() {
    let lines = this.props.lines;

    return (
      <>
        {lines.map(function(line: any, index: any) {
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
