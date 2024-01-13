import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    search = () => {
        const {keywordNode: {value: keyword}} = this;
        console.log("获取用户输入：", keyword)
        // 更新状态
        this.props.updateAppState({isFirst: false, isLoading: true})
        axios.get(`/api/search/users?q=${keyword}`).then(
            response => {
                console.log("请求成功：", response.data)
                this.props.updateAppState({isLoading: false, users: response.data})
            },
            error => {
                console.log("请求失败：", error)
                this.props.updateAppState({isLoading: false, err: error.message})
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