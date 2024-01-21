import React, {Component} from 'react';

const detailData = [
    {id: '01', content: '你好，消息01'},
    {id: '02', content: '你好，消息02'},
    {id: '03', content: '你好，消息03'}
]

class Detail extends Component {
    render() {
        console.log("Detail组件props", this.props)
        // 接收params参数
        const {id, title} = this.props.match.params
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>Tile:{title}</li>
                    <li>CONTENT:{findResult.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;