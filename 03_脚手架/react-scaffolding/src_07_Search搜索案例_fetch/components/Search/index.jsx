import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Search extends Component {
    search = async () => {
        const {keywordNode: {value: keyword}} = this;
        PubSub.publish("USERS", {isFirst: false, isLoading: true})

        /* 未优化
        fetch(`/api/search/users?q=${keyword}`).then(
            response => {
                console.log("联系服务器成功：")
                return response.json();
            },
            error => {
                console.log("联系服务器失败：", error)
                return new Promise(() => {
                })
            }
        ).then(
            response => {
                console.log("获取数据成功", response)
                PubSub.publish("USERS", {isLoading: false, users: response})
            },
            error => {
                console.log("获取数据失败", error)
                PubSub.publish("USERS", {isLoading: false, err: error.message})
            },
        )*/

        // 优化版本
        try {
            const response = await fetch(`/api/search/users?q=${keyword}`)
            const data = await response.json()
            PubSub.publish("USERS", {isLoading: false, users: data})
        } catch (error) {
            console.log("请求失败", error)
            PubSub.publish("USERS", {isLoading: false, err: error.message})
        }
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