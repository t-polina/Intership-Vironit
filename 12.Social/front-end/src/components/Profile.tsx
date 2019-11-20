import * as React from 'react';
import * as selectors from '../store/users/selectors'
import { connect } from 'react-redux';
import { getUserByToken } from '../store/users/thunks'
import Button from '@material-ui/core/Button';
import { Container, Typography, Avatar } from '@material-ui/core';
import socket from '../soket'
const socket1 = socket();
interface User {
    name: string,
    surname: string,
    login: string
}

class Profile extends React.Component<any>{
    token: any
    user: User = { name: '', surname: '', login: '' }
    state = { user: this.user }
    constructor(props: any) {
      super(props);
      
  }
    async componentDidMount() {
        this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (this.token) {
            await this.props.getUser(this.token);
            socket1.emit('LOGIN', { id: this.props.user._id});
        }
    }
    update = () => {
        this.props.history.push('/update')
    }
    friendsPage = () => {
        this.props.history.push('/friends')
    }

    render() {
        const user = this.props.user;
        return (
            <Container component="main" maxWidth="xs">
                <Avatar className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/1200px-Man_silhouette.svg.png'></Avatar>
                <Button variant="outlined" onClick={this.update}>Update</Button>
                <Typography >{user.name}  {this.props.user.surname}</Typography>
                <Typography >Login: {this.props.user.login}</Typography>
                <Container>
                    <Button variant="outlined" onClick={this.friendsPage}>Friends</Button>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: selectors.userSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: (token: string) => dispatch(getUserByToken(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)