import React, { useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';

export default function Detail() {
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
    const { id } = useParams();
    const msg = messages.find(m => {
        return m.id === id;
    });

    // useMatch需要制定路由路径
    const match = useMatch('/home/message/detail/:id');
    console.log('match', match);
    return (
        <div>
            <li>ID: {msg.id}</li>
            <li>Tile:{msg.title}</li>
            <li>Content:{msg.content}</li>
        </div>
    );
}
