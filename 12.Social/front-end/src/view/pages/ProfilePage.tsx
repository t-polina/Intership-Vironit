import * as React from 'react';
import * as userSelectors from '../../store/users/userSelectors'
import { connect } from 'react-redux';
import { getUserByToken } from '../../store/users/userThunks'
import { Container, Button} from '@material-ui/core';
import InfAboutUser from '../components/InfAboutUser'
import socket from '../../utils/soket'
const socket1 = socket();

class Profile extends React.Component<any>{

    async componentDidMount() {
        if (this.props.isLogin) {
            await this.props.getUser();
            socket1.emit('LOGIN', '');
        }
    }

    update = () => {
        this.props.history.push('/update')
    }

    friendsPage = () => {
        this.props.history.push('/friends')
    }

    render() {
        const userInf = <InfAboutUser name={this.props.user.name}
                                    surname={this.props.user.surname}
                                    login={this.props.user.login} />
        return (
            <Container component="main" maxWidth="xs">
               {userInf}
                <Container>
                    <Button variant="outlined" onClick={this.update}>Update</Button>
                    <Button variant="outlined" onClick={this.friendsPage}>Friends</Button>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: userSelectors.userSelector(state),
        isLogin: userSelectors.isLoginSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: () => dispatch(getUserByToken())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)