import React from 'react'
import CreateUser from './components/CreateUser';
import Login from './components/Login'
import UpdateUser from './components/UpdateUser'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRouteProfile from './PrivateRouter'
import {PrivateRouteUpdate, PrivateRouteFriend} from './PrivateRouter'
import FindUserPage from './components/FindUserPage'
import { withRouter } from 'react-router-dom';
import Profile from './components/Profile';
import Friends from './components/Friends';
import Message from './components/Message';


class Router extends React.Component<any> {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
        <Route path="/registration" component={CreateUser} />
        <Route path="/signin" component={Login} />
        <PrivateRouteProfile path='/profile' component={Profile} />
        <PrivateRouteUpdate path='/update' component={UpdateUser} />
        <Route path="/user" component={FindUserPage} />
        <Route path="/message" component={Message} />
        <PrivateRouteFriend path="/friends" component={Friends} />
      </Switch >
    )
  }
}

export default withRouter(Router)