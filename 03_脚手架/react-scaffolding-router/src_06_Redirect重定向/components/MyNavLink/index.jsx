import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName="myActive"
                     className="list-group-item" {...this.props}>{this.props.children}</NavLink>
        );
    }
}

export default MyNavLink;