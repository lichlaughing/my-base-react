import React, {Component} from 'react';

class Header extends Component {
    render() {
        //console.log("一般组件接收到Props:", this.props)
        return (
            <div className="page-header"><h2>React Route Demo</h2></div>
        );
    }
}

export default Header;