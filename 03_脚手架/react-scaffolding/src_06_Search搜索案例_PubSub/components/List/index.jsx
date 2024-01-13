import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './list.css'

class List extends Component {
    state = {
        users: [], //用户列表
        isFirst: true, //是否为第一次打开页面
        isLoading: false,//加载数据中
        err: '' // error msg
    }

    componentDidMount() {
        this.token = PubSub.subscribe('USERS', (_, data) => {
            this.setState(data)
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isLoading, isFirst, err} = this.state
        return (
            <div className="container">
                <div className="row">
                    {
                        isFirst ? <h2>欢迎使用，输入关键字，开始搜索吧老铁！</h2> :
                            isLoading ? <h2>Loading.....</h2> :
                                err ? <h2 style={{color: "red"}}>{err}</h2> :
                                    users.map((userObj) => {
                                        return <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img src={userObj.avatar_url} style={{width: "100px"}}
                                                     alt={""}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    })
                    }
                </div>
            </div>
        );
    }
}

export default List;