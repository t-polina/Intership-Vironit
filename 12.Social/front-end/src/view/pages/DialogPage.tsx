import * as React from 'react';
import { Container, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';

import Message from '../components/Message'

import * as userSelectors from '../../store/users/selectors'
import * as messageSelectors from '../../store/messages/messagesSelectors'
import { getDiaologWithUser, sendMessage } from '../../store/messages/messagesThunks';
import { getFoundUser } from '../../store/users/thunks';

class Dialog extends React.Component<any>{
    inputMessageRef: any;
    dialogBoxRef: any;
    inputMessage: string | undefined;
    shippedObj: any;
    token = localStorage.getItem('token') || sessionStorage.getItem('token');
    isTop: boolean;
    currentHeightScroll: number;
    loginFoundUser: string;
    constructor(props: any) {
        super(props);
        this.inputMessage = '';
        this.currentHeightScroll = 0;
        this.isTop = false;
        this.inputMessageRef = React.createRef();
        this.dialogBoxRef = React.createRef();
        this.loginFoundUser = this.props.location.pathname.substring(9);
        this.props.getFoundUser(this.loginFoundUser);
        this.shippedObj = { 'text': this.inputMessage, 'sender': '' };
    }

    componentDidUpdate() {
        this.isTop ? this.dialogBoxRef.current.scrollTop = this.currentHeightScroll : this.dialogBoxRef.current.scrollTop = this.dialogBoxRef.current.scrollHeight
    }
    componentDidMount() {
        this.props.getUserMessage(this.props.foundUser._id, 0);
        this.dialogBoxRef.current.addEventListener('scroll', () => {
            if (this.dialogBoxRef.current.scrollTop === 0) {
                this.currentHeightScroll = this.dialogBoxRef.current.scrollHeight;
                this.props.getUserMessage(this.props.foundUser._id, this.props.message.length);
                this.isTop = true;
            }
        })
    }

    sendMessage = () => {
        this.isTop = false;
        this.inputMessageRef.current.value = ''
        this.shippedObj.text = this.inputMessage;
        this.props.sendMessage(this.shippedObj, this.props.interlocutor._id, this.token)
    }

    onKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    render() {
        if (!this.props.message) return null
        const allMessages = this.props.message.map((el: any) => {
            if (el.sender === this.props.interlocutor._id) {
                return <Message sender={this.loginFoundUser} text={el.text} />
            } else
                return <Message sender={'your'} text={el.text} />
        });


        return (
            <Container component="main" maxWidth="xs">
                <div ref={this.dialogBoxRef} className="messageContainer" >
                    {allMessages}
                </div>
                <div className='sendMessage'>
                    <input ref={this.inputMessageRef}
                        onKeyDown={this.onKeyDown}
                        type="text"
                        className='inputMessage'
                        placeholder="Message"
                        onChange={ev => { this.inputMessage = ev.target.value }} />
                    <IconButton onClick={this.sendMessage}><SendIcon /></IconButton>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        idMessage: userSelectors.idMessageSelector(state),
        message: messageSelectors.messagesOnDialogSelector(state),
        interlocutor: userSelectors.visitedUserSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFoundUser: (login: string) => dispatch(getFoundUser(login)),
        getUserMessage: (id: string, startIndex: number) => dispatch(getDiaologWithUser(id, startIndex)),
        sendMessage: (messageObj: any, recipient: any, token: any) => dispatch(sendMessage(messageObj, recipient, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog)