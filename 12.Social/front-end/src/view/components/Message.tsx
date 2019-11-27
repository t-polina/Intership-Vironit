import * as React from 'react';
import { Typography } from '@material-ui/core';

export default class Message extends React.Component<any> {

    constructor(props: any) {
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