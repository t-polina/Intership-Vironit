import React from 'react';
import * as selectorsUser from '../../../store/users/userSelectors';
import * as selectorsMessage from '../../../store/messages/messagesSelectors';
import { setMessageOnRT, getUserDialogs } from '../../../store/messages/messagesThunks';
import { connect } from "react-redux";
import socket from '../../../utils/soket';
import Router from '../../../navigation/router';
import Navigation from '../NavigationBar';
const socket1 = socket();

export class SocketListener extends React.Component<any> {
    constructor(props: any) {
        super(props);
        if (this.props.isLogin) {
            socket1.on('RECEIVE_MESSAGE', (data: any) => {
                this.props.sendMessage(data);
            });

            socket1.on('REQUESR_JOIN_TO_ROOM', (data: any) => {
                console.log(data.id)
                if (data.id === this.props.user._id) {

                    socket1.emit('JOIN_TO_ROOM', data.room);
                    this.props.sendMessage(data.message);
                }
            });
        }
    }


    render() {
        socket1.emit('LOGIN', '');
        return (
            <React.Fragment>
                <Navigation />
                <Router />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLogin: selectorsUser.isLoginSelector(state),
        rooms: selectorsMessage.roomsSelector(state),
        user: selectorsUser.userSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (data: any) => dispatch(setMessageOnRT(data)),
        getUserDialogs: () => dispatch(getUserDialogs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SocketListener)


