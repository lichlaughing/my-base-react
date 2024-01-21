import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'
import Detail from "./Detail";

class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息01'},
            {id: '02', title: '消息02'},
            {id: '03', title: '消息03'}
        ]
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => (
                            <li key={msgObj.id}>
                                {/*向路由组件传递params参数*/}
                                {/*<NavLink to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</NavLink>*/}

                                {/*向路由组件传递search参数*/}
                                <NavLink
                                    to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                {/*声明接收params参数*/}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

                {/*声明接收search参数,无需声明接收*/}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}

export default Message;