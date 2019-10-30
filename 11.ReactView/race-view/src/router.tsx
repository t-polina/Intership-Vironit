import React from 'react'
import CreateUser from './components/CreateUser';
import Login from './components/Login'
import UserPage from './components/UserPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/user" />
    </Route>
    <Route path="/registration" component={CreateUser} />
    <Route path="/login" component={Login} />
    <PrivateRouter path='/user' component={UserPage} exact />
    <Route path="/update" component={CreateUser} />
  </Switch>
)

export default Router