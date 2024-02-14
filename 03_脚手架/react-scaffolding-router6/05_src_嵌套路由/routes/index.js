/**
 * 路由表
 */
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }
];

export default routes;
