import * as React from 'react';
import * as selectors from '../store/users/selectors'
import * as friendsSelectors from '../store/friends/friendsSelectors'
import { connect } from 'react-redux';
import { Container, Button, Typography } from '@material-ui/core';
import { getRequestUsers, deleteRequest,  setIdFriendMessage } from '../store/users/thunks';
import { addOnFriends, getFriends, deleteFriend } from '../store/friends/friendsThunks';

class Friends extends React.Component<any>{
    token = localStorage.getItem('token') || sessionStorage.getItem('token');
    state = { isR: false };
    constructor(props: any) {
        super(props);
        this.props.getRequestUsers(this.token);
        this.props.getFriends(this.token);
    }

    onClickAddOnFriend = (id: any) => {
        this.props.addOnFriends(this.token, id);
        this.props.getFriends(this.token);
        this.props.getRequestUsers(this.token);
    }
    onClickRefuse = (id: any) => {
        this.props.deleteRequest(this.token, id);
    }
    onClickDeleteFromFriends = (id: any) => {
        this.props.deleteFriend(this.token, id)
    }
    onClickR = () => {
        this.setState({ isR: !this.state.isR })
    }
    onClickSendMessage = (id: string, login: string) => {
        this.props.setIdFriendMessage(id, login);
        this.props.history.push('/message')
    }
    

    render() {
        let requests = this.props.users.map((data: any) => {
            return <PersonRow data={data} onClickAdd={this.onClickAddOnFriend} onClickNo={this.onClickRefuse} />
        })
        let friends = this.props.friends.map((data: any) => {
            return <FriendRow data={data} onClickDelete={this.onClickDeleteFromFriends} onClickMessage={this.onClickSendMessage}/>
        })


        return (
            <Container component="main" maxWidth="xs">
                {this.props.users.length ? <Button color="secondary" fullWidth onClick={this.onClickR}>You have {this.props.users.length} request</Button>
                    : <Typography>You don't have requests</Typography>}
                {this.state.isR ? <div>{requests} </div> : null}

                {this.props.friends.length ? <Button fullWidth>You have {this.props.friends.length} friends</Button>
                    : <Typography>You don't have friends</Typography>}
                {this.state.isR ? null : <div>{friends}</div>}
            </Container>
        );
    }
}
const FriendRow = (props: any) => {
    if (props.data==null) return (<div></div>);
    return (
        <div>
            {props.data.login}
            <div>
                <Button color="primary" fullWidth variant="outlined"  onClick={() => { props.onClickMessage(props.data._id, props.data.login) }}> Send message</Button>
            </div>
            <div>
                <Button color="secondary" fullWidth variant="outlined" onClick={() => { props.onClickDelete(props.data._id) }}> Delete</Button>
            </div>
        </div>
    );
}
const PersonRow = (props: any) => {
    if (props.data.login==null) return (<div></div>);
    return (
        <div>
            {props.data.login}
            <div>
                <Button color="primary" fullWidth variant="outlined" onClick={() => { props.onClickAdd(props.data._id) }}> Add to friends</Button>
            </div>
            <div>
                <Button color="secondary" fullWidth variant="outlined" onClick={() => { props.onClickNo(props.data._id) }}> Refuse</Button>
            </div>

        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.requestUsersSelector(state),
        friends: friendsSelectors.friendsSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getRequestUsers: (token: string) => dispatch(getRequestUsers(token)),
        addOnFriends: (token: string, id: string) => dispatch(addOnFriends(token, id)),
        getFriends: (token: string) => dispatch(getFriends(token)),
        deleteFriend: (token: string, id: string) => dispatch(deleteFriend(token, id)),
        deleteRequest: (token: string, id: string) => dispatch(deleteRequest(token, id)),
        setIdFriendMessage: (id: string, login: string) => dispatch(setIdFriendMessage(id, login)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Friends)