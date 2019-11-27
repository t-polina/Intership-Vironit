import Friend from '../components/Friend'
import FriendRequest  from '../components/FriendRequest'

import * as React from 'react';
import * as selectors from '../../store/users/selectors'
import * as friendsSelectors from '../../store/friends/friendsSelectors'
import { connect } from 'react-redux';
import { Container, Button, Typography } from '@material-ui/core';
import { getRequestUsers, deleteRequest } from '../../store/users/thunks';
import { addOnFriends, getFriends, deleteFriend } from '../../store/friends/friendsThunks';

class Friends extends React.Component<any>{
    state = { isR: false };
    constructor(props: any) {
        super(props);
        this.props.getRequestUsers();
        this.props.getFriends();
    }

    onClickAddOnFriend = (id: any) => {
        this.props.addOnFriends( id);
        this.props.getFriends();
        this.props.getRequestUsers();
    }
    onClickRefuse = (id: any) => {
        this.props.deleteRequest(id);
    }
    onClickDeleteFromFriends = (id: any) => {
        this.props.deleteFriend(id)
    }
    onClickR = () => {
        this.setState({ isR: !this.state.isR })
    }
    onClickSendMessage = (id: string, login: string) => {
        this.props.history.push(`/message/${login}`);
    }
    

    render() {
        let requests = this.props.users.map((data: any) => {
            return <FriendRequest data={data} onClickAdd={this.onClickAddOnFriend} onClickNo={this.onClickRefuse} />
        })
        let friends = this.props.friends.map((data: any) => {
            return <Friend data={data} onClickDelete={this.onClickDeleteFromFriends} onClickMessage={this.onClickSendMessage}/>
        })


        return (
            <Container component="main" maxWidth="xs">
                {this.props.users.length ?
                 <Button color="secondary" fullWidth onClick={this.onClickR}>You have {this.props.users.length} request</Button>
                    : <Typography>You don't have requests</Typography>}
                {this.state.isR ? <div>{requests} </div> : null}

                {this.props.friends.length ? <Button fullWidth>You have {this.props.friends.length} friends</Button>
                    : <Typography>You don't have friends</Typography>}
                {this.state.isR ? null : <div>{friends}</div>}
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.requestUsersSelector(state),
        friends: friendsSelectors.friendsSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getRequestUsers: () => dispatch(getRequestUsers()),
        addOnFriends: ( id: string) => dispatch(addOnFriends(id)),
        getFriends: () => dispatch(getFriends()),
        deleteFriend: (id: string) => dispatch(deleteFriend(id)),
        deleteRequest: (id: string) => dispatch(deleteRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Friends)