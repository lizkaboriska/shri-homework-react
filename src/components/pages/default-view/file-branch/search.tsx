import React, { Component } from "react";
import { connect } from "react-redux";
import { StateInterface } from "../../../../interfaces/stateInterface";

class Search extends Component<any> {
  search = (event: any) => {
    const text = event.target.value;
    if (this.props.active_tab === "files") {
      this.props.dispatch({ type: "SEARCH_FILES", content: text });
    } else if (this.props.active_tab === "branches") {
      this.props.dispatch({ type: "SEARCH_BRANCHES", content: text });
    }
  };
  render() {
    if (
      this.props.active_tab === "files" ||
      this.props.active_tab === "branches"
    ) {
      return (
        <div className="layout__container layout__container_indent-h_s">
          <div className="section section_indent-t_10">
            <div className="search">
              <input
                onChange={this.search}
                className="search__input"
                placeholder="Начните вводить имя для поиска"
                id="files-search"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = (state: StateInterface) => ({
  active_tab: state.active_tab
});
export default connect(mapStateToProps)(Search);
