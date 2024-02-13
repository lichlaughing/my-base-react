import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const [sum, setSum] = useState(1);
    return (
        <div>
            <h3>我是Home</h3>
            {sum === 100 ? <Navigate to="/about" /> : <h4>当前求和为：{sum}</h4>}
            <button onClick={() => setSum(100)}>改变求和，路由跳转</button>
        </div>
    );
}
