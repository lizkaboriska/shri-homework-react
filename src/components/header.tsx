import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="layout__container layout__container_size_full">
                <div className="header">
                    <div className="header__item">
                        <div className="header__logo logo"></div>
                    </div>
                    <div className="header__item">
                        <div className="header__menu dd-menu header__dropdown">
                            <div className="text text_line_l text_weight_bold text_size_s">Repository</div>
                            <div className="text text_line_m text_size_s">Arc</div>
                            <div className="header-arrow"></div>
                            <div className="header__dropdown-content">
                                <p>Arc</p>
                                <p>My repository</p>
                                <p>Some other repo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;