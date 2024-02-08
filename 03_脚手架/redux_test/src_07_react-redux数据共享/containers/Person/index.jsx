import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';

// person UI组件
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name, age };
        this.props.addPerson(personObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    };
    render() {
        return (
            <div style={{ marginLeft: '30%' }}>
                <h3>我是Person组件</h3>
                <h4>当前求和为：{this.props.count}</h4>
                姓名：
                <input ref={c => (this.nameNode = c)} type="text" placeholder="输入姓名" />
                年龄：
                <input ref={c => (this.ageNode = c)} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加人员</button>
                <ul>
                    {this.props.ydr.map(personObj => {
                        return (
                            <li key={personObj.id}>
                                名字：{personObj.name}-age:{personObj.age}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(state => ({ ydr: state.person, count: state.count }), {
    addPerson: createAddPersonAction
})(Person);
