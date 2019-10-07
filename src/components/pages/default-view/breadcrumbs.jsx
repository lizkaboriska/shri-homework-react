import React, { Component } from "react";
import {connect} from "react-redux";
import File from "./file-branch/files/file";
import {refreshFilesList} from "../../../index";

class Crumbs extends Component {
    open = (breadcrumbs_idx) => {
        let dirpath = "";
        for (let idx = 0; idx <= breadcrumbs_idx; ++idx) {
            dirpath += this.props.breadcrumbs[idx];
        }

        console.log("OPEN DIRECTORY from CRUMBS to: ", dirpath)
        this.props.dispatch({
            type: 'OPEN_DIRECTORY',
            content: {
                dirpath: dirpath
            }
        });
        refreshFilesList();
    };
    openRoot = () => {
        let dirpath = this.props.repository;
        this.props.dispatch({
            type: 'OPEN_DIRECTORY',
            content: {dirpath: ".", breadcrumbs: []}
        });
        refreshFilesList();
    };
    render() {
        return (
            <div className="layout__container layout__container_indent-h_s">
                <div className="section section_space-b_2 section_underline_grey">
                    <div onClick={this.openRoot} className="text text_line_m text_size_s">{this.props.repository}</div>
                    {this.props.breadcrumbs.map((crumb, idx) => (
                        <div onClick={() => {this.open(idx)}} className="text text_line_m text_size_s" key={idx}>
                            {'/  '} {crumb}
                        </div>
                    ))}
                    <div className="text text_line_m text_weight_bold text_size_s"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    repository : state.repository,
    breadcrumbs: state.breadcrumbs
});
export default connect(mapStateToProps)(Crumbs);