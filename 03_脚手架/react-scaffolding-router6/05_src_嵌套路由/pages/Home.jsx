import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h2>我是Home</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="news">
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="message">
                            Message
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* 指定路由组件呈现的位置 */}
            <Outlet />
        </div>
    );
}
