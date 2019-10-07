import React, {Component} from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    search = (event) => {
        const text = event.target.value;
        if (this.props.active_tab === "files") {
            this.props.dispatch({type: "SEARCH_FILES", content: text});
        } else if (this.props.active_tab === "branches") {
            this.props.dispatch({type: "SEARCH_BRANCHES", content: text});
        }
    };
    render() {
        if (this.props.active_tab === "files" || this.props.active_tab === "branches") {
            return (
                <div className="layout__container layout__container_indent-h_s">
                    <div className="section section_indent-t_10">
                        <div className="search">
                            <input
                                onChange={this.search}
                                className="search__input"
                               placeholder="Начните вводить имя для поиска"
                               id="files-search"/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return "";
        }
    }
}

const mapStateToProps = (state) => ({
    active_tab: state.active_tab
});
export default connect(mapStateToProps)(Search);