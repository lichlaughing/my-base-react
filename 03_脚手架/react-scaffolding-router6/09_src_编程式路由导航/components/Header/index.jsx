import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    function goForward() {
        navigate(1);
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Route Demo</h2>
                <button onClick={goBack}>后退</button>
                <button onClick={goForward}>前进</button>
            </div>
        </div>
    );
}
