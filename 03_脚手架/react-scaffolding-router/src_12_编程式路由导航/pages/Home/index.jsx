import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>我是Home</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li><MyNavLink to="/home/news" title="News">News</MyNavLink></li>
                        <li><MyNavLink to="/home/message" title="message">Message</MyNavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}

export default Home;