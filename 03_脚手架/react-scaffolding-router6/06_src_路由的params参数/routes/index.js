/**
 * 路由表
 */
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import { Navigate } from 'react-router-dom';
import Detail from '../pages/Detail';

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
                path: '',
                element: <Navigate to="message" />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        path: 'detail/:id',
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about" />
    }
];

export default routes;
