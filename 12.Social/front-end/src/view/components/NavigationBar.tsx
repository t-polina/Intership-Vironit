import React from 'react'
import Search from './Search'
import { NavLink, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import { connect } from "react-redux";

import * as userSelectors from '../../store/users/selectors'
import { setIsLogin } from "../../store/users/thunks";
import socket from '../../utils/soket'
const socket1 = socket();

export class NavigationBar extends React.Component<any> {
  token: string | null;
  constructor(props: any) {
    super(props);
    this.token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (this.token) this.props.setIsLogin(true);
  }
  logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.setIsLogin(false);
    socket1.emit('DISCONECT', '');

  }
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Search />
          <div className="navButton">
            {this.props.isLogin ? <Button color="inherit" onClick={this.logout}><NavLink to="/signin">Log out</NavLink></Button>
              : <Container>
                  <Button color="inherit"> <NavLink to="/signin">Sign in</NavLink></Button>
                  <Button color="inherit"> <NavLink to="/registration">Sign up</NavLink></Button>
              </Container>}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLogin: userSelectors.isLoginSelector(state)
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsLogin: (isLogin: boolean) => dispatch(setIsLogin(isLogin)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar))

