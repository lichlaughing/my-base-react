import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom';
import React from 'react';
import routes from './routes';
import Header from './components/Header';

export default function App() {
    console.log('App组件位于路由组件context', useInRouterContext());
    // 根据路由表生成路由规则
    const element = useRoutes(routes);
    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className="list-group-item" to="/about">
                            About
                        </NavLink>
                        <NavLink className="list-group-item" to="/home">
                            Home
                        </NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
