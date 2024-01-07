import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item";
import "./list.css"

class List extends Component {
    // 对接收的props进行：类型、必要性校验
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}
                                     updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;