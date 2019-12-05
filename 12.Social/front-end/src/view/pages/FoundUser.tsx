import * as React from 'react';
import { Container, Button } from '@material-ui/core';
import InfAboutUser from '../components/InfAboutUser'
import { connect } from 'react-redux';
import * as userSelectors from '../../store/users/userSelectors'
import { getFoundUser} from '../../store/users/userThunks';
import { sendRequest} from '../../store/friends/friendsThunks';

class FoundUser extends React.Component<any>{
    state = { isRequest: false };
    loginFoundUser: string;

    constructor(props: any) {
        super(props);
        this.loginFoundUser = this.props.location.pathname.substring(6);
    }

    componentDidMount() {
        this.props.getFoundUser(this.loginFoundUser);
    }

    sendRequest = () => {
        this.props.sendRequest(this.loginFoundUser)
        this.setState({ isRequest: true })
    }

    sendMessage = () => {
        this.props.history.push(`/message/${this.loginFoundUser}`);
    }

    render() {
        const userInf = <InfAboutUser name={this.props.foundUser.name}
                                    surname={this.props.foundUser.surname}
                                    login={this.props.foundUser.login} />
        return (
            <Container component="main" className="userPage" >
                {userInf}
                {this.props.isLogin ? 
                    <div>
                        {this.state.isRequest ? 
                            <Button variant="outlined" disabled>Request sent</Button> :
                            <Button variant="outlined" onClick={this.sendRequest}>Add Friend</Button>}
                            <Button variant="outlined" onClick={this.sendMessage}>Message</Button>
                    </div> : null}
             
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLogin: userSelectors.isLoginSelector(state),
        foundUser: userSelectors.visitedUserSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFoundUser: (login: string) => dispatch(getFoundUser(login)),
        sendRequest: (login: string) => dispatch(sendRequest(login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundUser)