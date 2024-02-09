import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* class Demo extends Component {
    state = {
        count: 0
    };
    myRef = React.createRef();
    add = () => {
        this.setState({ count: this.state.count + 1 });
    };
    unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    };
    show = () => {
        alert(this.myRef.current.value);
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
                <input ref={this.myRef} type="text" placeholder="输入后，点击展示数据" />
                <button onClick={this.add}>+1</button>
                <button onClick={this.unMount}>卸载组件</button>
                <button onClick={this.show}>展示数据</button>
            </div>
        );
    }
}
 */
function Demo() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('jerry');
    const myRef = React.createRef();
    function add() {
        // setCount(count + 1);
        setCount(count => count + 1);
    }
    function changeName() {
        setName('李白');
    }

    function unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    function show() {
        alert(myRef.current.value);
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <h2>当前求和为:{count}</h2>
            <h2>当前名称为:{name}</h2>
            <input ref={myRef} type="text" placeholder="输入后，点击展示数据" />
            <button onClick={add}>+1</button>
            <button onClick={changeName}>改名</button>
            <button onClick={unMount}>卸载组件</button>
            <button onClick={show}>展示数据</button>
        </div>
    );
}

export default Demo;
