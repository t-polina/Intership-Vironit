import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as selectors from '../store/users/selectors'
import { setRequest } from '../store/users/thunks';

class FindUserPage extends React.Component<any>{
    token = localStorage.getItem('token') || sessionStorage.getItem('token')
    state = { isRequest: false };
    setRequesFriend = () => {
     
        this.props.setRequest(this.props.findUser.login, this.token)
    }

    update = () => {
        this.props.history.push('/update');
    }

    sendMessage = () => {
        this.props.history.push('/message');
    }

    set = () => {
        this.setState({isRequest: true}) 
    }

    render() {
        return (
            <div className="userPage" >
                <p>{this.props.findUser.name}</p>
                <p>{this.props.findUser.surname}</p>
                <span>{this.props.findUser.login} </span>

                {this.token ? <div>
                    {this.state.isRequest ? <Button variant="outlined" onClick={this.set}>Requesr sent</Button> : <Button variant="outlined" onClick={this.set}>Add Friend</Button>}
                    <Button variant="outlined" onClick={this.sendMessage}>Message</Button>
                </div> : null}
                {this.props.user.role === 'Admin' ? <Button variant="outlined" onClick={this.update}>Edit user</Button> : null}

            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: selectors.userSelector(state),
        findUser: selectors.visitedUserSelector(state)

    }
}
const mapDispatchToProps = () => {
    return {
        setRequest: (loginToFriend: string, token: string) => setRequest(loginToFriend, token)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUserPage)