import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'
import Detail from "./Detail";

class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息01'},
            {id: '02', title: '消息02'},
            {id: '03', title: '消息03'},
            {id: '04', title: '消息04'}
        ]
    }

    pushShow = (id, title) => {
        // push跳转+携带params参数
        //this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转+携带search参数
        //this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // push跳转+携带state参数。 参数重名，简写模式
        this.props.history.push(`/home/message/detail`, {id, title})
    }

    replaceShow = (id, title) => {
        // replace跳转+携带params参数
        //this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // push跳转+携带search参数
        //this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // push跳转+携带state参数
        this.props.history.replace(`/home/message/detail`, {id: id, title: title})
    }

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForwad()
    }
    go = () => {
        this.props.history.go(-2)
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
                                {/*<NavLink to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</NavLink>*/}

                                {/*向路由组件传递state参数*/}
                                <NavLink
                                    to={{
                                        pathname: '/home/message/detail',
                                        state: {id: msgObj.id, title: msgObj.title}
                                    }}>{msgObj.title}</NavLink>

                                &nbsp;&nbsp;
                                <button onClick={() => {
                                    this.pushShow(msgObj.id, msgObj.title)
                                }}>push查看
                                </button>
                                &nbsp;&nbsp;
                                <button onClick={() => {
                                    this.replaceShow(msgObj.id, msgObj.title)
                                }}>replace查看
                                </button>
                            </li>
                        ))
                    }
                </ul>
                {/*声明接收params参数*/}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

                {/*声明接收search参数,无需声明接收*/}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}

                {/*声明接收state参数,无需声明接收*/}
                <Route path="/home/message/detail" component={Detail}/>

                <button onClick={this.back}>回退</button>
                &nbsp;
                <button onClick={this.forward}>前进</button>
                &nbsp;
                <button onClick={this.go}>前进(后退)n步</button>
            </div>
        );
    }
}

export default Message;