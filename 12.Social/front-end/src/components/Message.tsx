import * as React from 'react';
import { Container, Typography, IconButton, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import * as selectors from '../store/users/selectors'
import * as messageSelectors from '../store/messages/messagesSelectors'
import SendIcon from '@material-ui/icons/Send';
import { getDiaologWithUser, sendMessage } from '../store/messages/messagesThunks';
import socket from '../soket'
const socket1 = socket();

class Message extends React.Component<any>{
    message: string | undefined;
    messageObj: any;
    token = localStorage.getItem('token') || sessionStorage.getItem('token');

    constructor(props: any) {
        super(props);
        this.messageObj = { 'text': this.message, 'sender': '' };
        this.props.getUserMessage(this.token, this.props.idMessage);
    }

    sendMessage = async () => {
        this.messageObj.text = this.message;
        this.props.sendMessage(this.messageObj, this.props.idMessage, this.token, socket1, this.props.user._id)
    }
    render() {
        const a = this.props.message.map((el: any) => {
           console.log(el.sender);
           console.log(this.props.idMessage)
                if (el.sender === this.props.idMessage) {
                    return <MessageGet sender={this.props.login} text={el.text} />
                } else
                    return <MessageGet sender={'your'} text={el.text} />
        });
        return (
            <Container component="main" maxWidth="xs">
                <div className="messageContainer">
                    {a}
                </div>
                <div className='sendMessage'>
                    <Input type="text" className='inputMessage' placeholder="Message" onChange={ev => this.message = ev.target.value} />
                    <IconButton onClick={this.sendMessage}><SendIcon /></IconButton>
                </div>
            </Container>
        );
    }
}
const MessageGet = (props: any) => {
    return (
        <div>
            {props.sender === 'your' ?
                <div className='yourMessage'>
                    <Typography>You:</Typography>
                    <Typography>{props.text}</Typography>
                </div>
                : <div className='receivedMessage'>
                    <Typography>{props.sender}</Typography>
                    <Typography>{props.text}</Typography>
                </div>}
        </div>
    );
}


const mapStateToProps = (state: any) => {
    return {
        idMessage: selectors.idMessageSelector(state),
        message: messageSelectors.messagesOnDialogSelector(state),
        login: selectors.messageLoginSelector(state),
        user: selectors.userSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserMessage: (token: string, id: string) => dispatch(getDiaologWithUser(token, id)),
        sendMessage: (messageObj: any, recipient: any, token: any, soket: any, id: string) => dispatch(sendMessage(messageObj, recipient, token, soket, id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message)