import { NavLink, withRouter } from "react-router-dom";
import React from 'react'
import Search from './Search'
import * as selectors from '../store/users/selectors'
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import { setMessageOnRT } from '../store/messages/messagesThunks';
import { setIsLogin} from "../store/users/thunks";
import { connect } from "react-redux";
import socket from '../soket'

const socket1 = socket();
export class Navigation extends React.Component<any> {
  
  constructor(props: any) {
    super(props);
    socket1.on('RECEIVE_MESSAGE', (data: any) => {
      console.log('fghjjjj')
      console.log(data)
      this.props.sendMessage(data);
    });
  }
  logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.setIsLogin(false);
    this.props.history.push('/signin');
    socket1.emit('DISCONECT', { id: this.props.user._id });
  }
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Search />
          <div className="navButton">
            {this.props.isLogin ? <Button color="inherit" onClick={this.logout}>Log out</Button>
              : <Container> <Button color="inherit"> <NavLink to="/signin">Sign in</NavLink></Button> <Button color="inherit"> <NavLink to="/registration">Sign up</NavLink></Button> </Container>}
          </div>

        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLogin: selectors.isLoginSelector(state),
    user: selectors.userSelector(state)
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsLogin: (isLogin: boolean) => dispatch(setIsLogin(isLogin)),
    sendMessage: (data: any) => dispatch(setMessageOnRT(data))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))

