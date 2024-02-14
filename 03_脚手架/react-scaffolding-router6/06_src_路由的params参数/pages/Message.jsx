import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Message() {
    const [messages] = useState([
        {
            id: '001',
            title: '消息1',
            content: '敏而好学，不耻下问。'
        },
        {
            id: '002',
            title: '消息2',
            content: '知者乐水，仁者乐山。'
        },
        {
            id: '003',
            title: '消息3',
            content: '言必信，行必果。'
        }
    ]);
    return (
        <div>
            <ul>
                {messages.map(msg => {
                    return (
                        <li key={msg.id}>
                            <Link to={`detail/${msg.id}`}>{msg.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    );
}
