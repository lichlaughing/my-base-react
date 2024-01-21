import React, {Component} from 'react';

class Message extends Component {
    render() {
        return (
            <ul>
                <li><a href="/message1">Message1</a></li>
                <li><a href="/message2">Message2</a></li>
                <li><a href="/message3">Message3</a></li>
            </ul>
        );
    }
}

export default Message;