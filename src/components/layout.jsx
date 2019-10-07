import React, {Component} from 'react';
import Header from "./header";
import Footer from "./footer";
import Inner from "./pages/default-view/inner";


class Layout extends Component {
    render() {
        return (
            <>
                <Header />

                    <Inner />
                <Footer />
            </>
        );
    }
}

export default Layout;