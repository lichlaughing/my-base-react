import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import MyNavLink from "./components/MyNavLink";
import Home from "./pages/Home"; // 引入路由组件
import About from "./pages/About"; // 引入路由组件
import Header from "./components/Header"; // 引入一般组件

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about" title="About">About</MyNavLink>
                            <MyNavLink to="/home/a/b" title="Home">Home-模糊匹配</MyNavLink>
                            <MyNavLink to="/home/c/d" title="Home">Home-严格匹配</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Route exact path="/home/c/d" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}