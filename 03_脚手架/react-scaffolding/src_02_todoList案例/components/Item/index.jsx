import React, {Component} from 'react';
import "./item.css"

class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    handleCheck = (id) => {
        return (event) => {
            // console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除todo
    handleDel(id) {
        // 不使用window会报错：Unexpected use of 'confirm'  no-restricted-globals
        if (window.confirm("确定删除吗?")) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/*defaultChecked设置默认值，后续允许修改。使用checked需要使用onchange修改*/}
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => (this.handleDel(id))} className="btn btn-danger"
                        style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}

export default Item;