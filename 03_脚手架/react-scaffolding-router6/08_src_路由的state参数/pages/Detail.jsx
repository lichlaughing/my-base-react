import React, { useState } from 'react';
// 接收state参数
import { useLocation } from 'react-router-dom';

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
    // setSearch 用于更新接收到的search参数
    const {
        state: { id }
    } = useLocation();
    const msg = messages.find(m => {
        return m.id === id;
    });

    return (
        <div>
            <li>ID: {msg.id}</li>
            <li>Tile:{msg.title}</li>
            <li>Content:{msg.content}</li>
        </div>
    );
}
