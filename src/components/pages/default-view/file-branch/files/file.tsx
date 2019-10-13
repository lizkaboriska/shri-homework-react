import React, { Component } from "react";
import { connect } from "react-redux";
import { BACKEND_URI, refreshFilesList } from "../../../../../index";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class File extends Component<any> {
  open = () => {
    const filetype = this.props.file.type;
    const filename = this.props.file.name;

    const repository = this.props.state.repository;

    const cwd = this.props.state.cwd;
    const filepath = cwd + "/" + filename;

    console.log("file: filetype = ", filetype);

    switch (filetype) {
      case "blob":
        fetch(`${BACKEND_URI}/api/repos/${repository}/blob/master/${filepath}`)
          .then(res => res.json())
          .then(
            file_lines => {
              console.log("OPEN_FILE action is being dispatched");
              console.log("file_lines: ", file_lines);
              console.log("filename: ", filename);
              this.props.dispatch({
                type: "OPEN_FILE",
                content: { lines: file_lines.lines, filename: filename }
              });
            },
            error => {
              console.log(
                "Error occurred while retrieving last commit: ",
                error
              );
            }
          );

        console.log("cwd ", this.props.state.cwd);
        break;
      case "tree":
        this.props.dispatch({
          type: "OPEN_DIRECTORY",
          content: { dirpath: this.props.state.cwd + "/" + filename }
        });

        refreshFilesList();
        break;
    }
  };

  getIcon = () => {
    const prop = this.props.file.type;
    if (prop === "tree") return "folder-icon";
    if (prop === "blob") return "file-icon";
  };

  getMessage = () => {
    let prop = this.props.file.message;
    if (prop.length > 55) {
      prop = prop.substring(0, 52) + "...";
    }
    return prop;
  };

  getTime = () => {
    let time = new Date(this.props.file.date);
    return timeAgo.format(time);
  };

  render() {
    return (
      <div className="list__container">
        <div onClick={this.open} className="list__item list__name">
          <div className={this.getIcon()} />
          <div>{this.props.file.name}</div>
        </div>
        <div className="list__item list__brunch">{this.props.file.branch}:</div>
        <div className="list__item list__hash">
          {this.props.file.sha.substring(0, 5)}
        </div>
        <div className="list__item list__message">{this.getMessage()}</div>
        <br className="list__break" />
        <div className="list__item list__hash-mob">
          {this.props.file.sha.substring(0, 5)}
        </div>
        <div className="list__item list__author-mob">
          , by {this.props.file.author},
        </div>
        <div className="list__item list__author nickname">
          {this.props.file.author}
        </div>
        <div className="list__item list__time">{this.getTime()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  state: state
});
export default connect(mapStateToProps)(File);
