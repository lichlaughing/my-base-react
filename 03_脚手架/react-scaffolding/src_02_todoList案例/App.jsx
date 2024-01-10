import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css"

export default class App extends Component {
    // 状态在哪，操作状态的方法就在哪里
    state = {
        todos: [
            {
                id: "01",
                name: "吃饭",
                done: true
            },
            {
                id: "02",
                name: "睡觉",
                done: false
            },
            {
                id: "03",
                name: "打飞机",
                done: false
            }
        ]
    }

    // 添加一个todo,参数是todo对象
    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    // 更新todo
    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return {...todoObj, done: done}
            } else {
                return todoObj
            }
        })
        this.setState({todos: newTodos})
    }

    // 删除todo
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((toObj) => {
            return toObj.id !== id
        })
        this.setState({todos: newTodos})
    }
    // 完成全部todo
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        this.setState({todos: newTodos})
    }
    // 清除所有已经完成的todo
    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((toObj) => {
            return toObj.done === false
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}