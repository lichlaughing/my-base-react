import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForwad()
    }

    render() {
        //console.log("一般组件接收到Props:", this.props)
        return (
            <div className="page-header">
                <h2>React Route Demo</h2>
                <button onClick={this.back}>回退</button>
                &nbsp;
                <button onClick={this.forward}>前进</button>
                &nbsp;
            </div>
        );
    }
}

export default withRouter(Header);