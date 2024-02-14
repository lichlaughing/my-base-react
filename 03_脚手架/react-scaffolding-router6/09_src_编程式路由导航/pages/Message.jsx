import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    function showDetail(msg) {
        navigate('detail', {
            replace: false,
            state: {
                id: msg.id
            }
        });
    }
    return (
        <div>
            <ul>
                {messages.map(msg => {
                    return (
                        <li key={msg.id}>
                            <Link to="detail" state={{ id: msg.id }}>
                                {msg.title}
                            </Link>
                            <button onClick={() => showDetail(msg)}>查看详情</button>
                        </li>
                    );
                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    );
}
