import React, {Component} from 'react';
import './list.css'

class List extends Component {
    render() {
        const {users, isLoading, isFirst, err} = this.props
        return (
            <div className="container">
                <div className="row">
                    {
                        isFirst ? <h2>欢迎使用，输入关键字，开始搜索吧老铁！</h2> :
                            isLoading ? <h2>Loading.....</h2> :
                                err ? <h2 style={{color: "red"}}>{err}</h2> :
                                    users.map((userObj) => {
                                        return <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank">
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