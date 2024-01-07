import React, {Component} from 'react';
import PropTypes from "prop-types";
import {nanoid} from "nanoid"
import "./Header.css"

class Header extends Component {
    // 对接收的props进行：类型、必要性校验
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    // 键盘事件的回调
    handleKeyUp = (event) => {
        // 解构赋值获取回车键、输入的值
        const {keyCode, target} = event
        if (keyCode !== 13) return
        // 新的todo对象
        const todoObj = {id: nanoid(), name: target.value, done: false}
        // 传递给App
        event.target.value = ""
        this.props.addTodo(todoObj)
    }

    render() {
        return (
            <div className="todo-header">
                <h2>待办任务</h2>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;