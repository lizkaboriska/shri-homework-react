import React, {Component} from 'react';
import { connect } from 'react-redux';

class Branch extends Component {
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




const mapStateToProps = (state) => ({
    files: state.files
});

//export default Branch;
export default connect(mapStateToProps)(Branch);