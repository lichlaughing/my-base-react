import React from 'react';
import { useNavigationType } from 'react-router-dom';

export default function News() {
    console.log('使用的路由类型', useNavigationType());
    return (
        <ul>
            <li>news1</li>
            <li>news2</li>
            <li>news3</li>
        </ul>
    );
}