import React, {Component} from 'react';
import "./footer.css"

export default class Footer extends Component {
    // 全选checkBox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清除所有已完成的todo
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        const total = todos.length
        const doneCount = todos.reduce((p, c) => {
            return p + (c.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                 <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}
