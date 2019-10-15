import React, { Component } from "react";
import { connect } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { State } from "../../../interfaces/stateInterface";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Props {
  date: string | Date;
  message: string;
  sha: string;
  author: string;
}

class LastCommitInfo extends Component<Props, State> {
  getDate = () => {
    let time = new Date(this.props.date);
    return timeAgo.format(time);
  };

  render() {
    return (
      <div className="layout__container layout__container_indent-h_s">
        <div className="section">
          <div className="text text_size_s text_indent-r_5 text_line_xs">
            {this.props.message}
          </div>
          <div className="text text_size_s text_line_xs text_indent-r_5 text_color_blue">
            {this.props.sha}
          </div>
          <div className="text text_size_s text_line_xs text_indent-r_5 ">
            {this.getDate()}
          </div>
          <div className="text text_size_s text_line_xs text_indent-r_5">
            by
          </div>
          <div className="text text_size_s text_line_xs nickname">
            {this.props.author}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  sha: state.last_commit.sha,
  date: state.last_commit.date,
  author: state.last_commit.author,
  message: state.last_commit.message
});
export default connect(mapStateToProps)(LastCommitInfo);
