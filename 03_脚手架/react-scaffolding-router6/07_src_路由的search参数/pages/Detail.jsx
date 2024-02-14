import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

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
    const [search, setSearch] = useSearchParams();
    const msg = messages.find(m => {
        return m.id === search.get('id');
    });
    // 需要使用qs解析参数
    const location = useLocation();
    console.log('location', location);
    return (
        <div>
            <button onClick={() => setSearch('id=002')}>点我更新接收到的search参数</button>
            <li>ID: {msg.id}</li>
            <li>Tile:{msg.title}</li>
            <li>Content:{msg.content}</li>
        </div>
    );
}
