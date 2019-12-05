import * as React from 'react';
import { Typography } from '@material-ui/core';

interface MyProps {
    sender: string,
    text: string
}

export default class Message extends React.Component<MyProps> {

    constructor(props: MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.sender === 'your' ?
                    <div className='yourMessage'>
                        <Typography>You:</Typography>
                        <Typography>{this.props.text}</Typography>
                    </div>
                    : <div className='receivedMessage'>
                        <Typography>{`${this.props.sender}:`}</Typography>
                        <Typography>{this.props.text}</Typography>
                    </div>}
            </div>
        );
    }
}