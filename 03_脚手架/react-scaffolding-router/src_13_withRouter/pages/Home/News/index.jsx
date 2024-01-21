import React, {Component} from 'react';

class News extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/home/message")
        }, 2000)
    }

    render() {
        return (
            <ul>
                <li>news1</li>
                <li>news2</li>
                <li>news3</li>
            </ul>
        );
    }
}

export default News;