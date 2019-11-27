import React from 'react'
import CreateUser from '../view/pages/SignUpPage';
import Login from '../view/pages/SignInPage'
import UpdateUser from '../view/pages/UpdateUserPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRouteProfile, { PrivateRouteSignIn, PrivateRouteMessage } from './PrivateRouter'
import { PrivateRouteUpdate, PrivateRouteFriend } from './PrivateRouter'
import FindUserPage from '../view/pages/FoundUser'
import { withRouter } from 'react-router-dom';
import Profile from '../view/pages/ProfilePage';
import Friends from '../view/pages/FriendsPage';
import Message from '../view/pages/DialogPage';

class Router extends React.Component<any> {
  render() {
    return (
      <Switch>
        <PrivateRouteSignIn path="/registration" component={CreateUser} />
        <PrivateRouteSignIn path="/signin" component={Login} />
        <PrivateRouteProfile path='/profile' component={Profile} />
        <PrivateRouteUpdate path='/update' component={UpdateUser} />
        <Route path="/user/:login" component={FindUserPage} />
        <PrivateRouteMessage path="/message/:login" component={Message} />
        <PrivateRouteFriend path="/friends" component={Friends} />
        <Route exact path="*">
          <Redirect to="/profile" />
        </Route>
      </Switch >
    )
  }
}

export default withRouter(Router)