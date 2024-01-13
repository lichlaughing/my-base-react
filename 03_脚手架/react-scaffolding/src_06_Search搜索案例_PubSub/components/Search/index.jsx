import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios"

class Search extends Component {
    search = () => {
        const {keywordNode: {value: keyword}} = this;
        // 更新状态
        PubSub.publish("USERS", {isFirst: false, isLoading: true})
        axios.get(`/api/search/users?q=${keyword}`).then(
            response => {
                console.log("请求成功：", response.data)
                PubSub.publish("USERS", {isLoading: false, users: response.data})
            },
            error => {
                console.log("请求失败：", error)
                PubSub.publish("USERS", {isLoading: false, err: error.message})
            }
        )
    }

    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keywordNode = c} type="text" placeholder="输入关键词，搜索"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;