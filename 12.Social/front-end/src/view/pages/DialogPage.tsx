import * as React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';

import Message from '../components/Message'

import * as userSelectors from '../../store/users/userSelectors'
import * as messageSelectors from '../../store/messages/messagesSelectors'
import { getDiaologWithUser, sendMessage } from '../../store/messages/messagesThunks';
import { getFoundUser } from '../../store/users/userThunks';

interface Shipped {
    text: string | undefined,
    sender: string
}
interface Interlocutor {
    _id: string,
    requestsOnFriend: string,
    role: string,
    password: string,
    login: string,
    surnamename: string,
    requestToFriend: Array<any>,
    friends: Array<any>
}

interface MyProps {
    location: any,
    getFoundUser(login: string): void,
    message: Array<any>,
    interlocutor: Interlocutor,
    getUserMessage(interlocutorId: string, startIndex: number): void,
    sendMessage(shippedObj: Shipped, interlocutorId: string, token: string | null, isJoin: boolean): void,
}


class Dialog extends React.Component<MyProps, any>{
    private inputMessageRef: any;
    private dialogBoxRef: any;
    private inputMessage: string | undefined;
    private shippedObj: Shipped;
    private token: string | null;
    private isTop: boolean;
    private currentHeightScroll: number;
    private loginFoundUser!: string;
    private isJoin: boolean;

    constructor(props: MyProps) {
        super(props);
        this.currentHeightScroll = 0;
        this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
        this.isTop = false;
        this.inputMessageRef = React.createRef();
        this.dialogBoxRef = React.createRef();
        this.isJoin = false;
        this.getInterlocutor();
        this.getFirstPartMessages();
        this.shippedObj = { text: this.inputMessage, sender: '' };
    }

    getInterlocutor() {
        this.loginFoundUser = this.props.location.pathname.substring(9);
        this.props.getFoundUser(this.loginFoundUser);
    }

    getFirstPartMessages() {
        this.props.getUserMessage(this.props.interlocutor._id, 0);
    }

    componentDidUpdate() {
        this.isTop ? this.dialogBoxRef.current.scrollTop = this.currentHeightScroll : this.dialogBoxRef.current.scrollTop = this.dialogBoxRef.current.scrollHeight
    }
    componentDidMount() {
        this.dialogBoxRef.current.addEventListener('scroll', () => {
            if (this.dialogBoxRef.current.scrollTop === 0) {
                this.currentHeightScroll = this.dialogBoxRef.current.scrollHeight;
                this.props.getUserMessage(this.props.interlocutor._id, this.props.message.length);
                this.isTop = true;
            }
        })
    }

    sendMessage = () => {
        this.isTop = false;
        this.inputMessageRef.current.value = ''
        this.shippedObj.text = this.inputMessage;
        this.props.sendMessage(this.shippedObj, this.props.interlocutor._id, this.token, this.isJoin)
        this.isJoin = true;
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
                <Typography component="h1" variant="h5"> Dialog with {this.loginFoundUser} </Typography>
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
        sendMessage: (messageObj: any, recipient: string, token: string, isJoin: boolean) => dispatch(sendMessage(messageObj, recipient, token, isJoin)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog)