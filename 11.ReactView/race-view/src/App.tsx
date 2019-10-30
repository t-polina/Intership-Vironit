import * as React from 'react';
import store from './store/store'
import { BrowserRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import Router from './router'
import Navigation from './components/navigation/index'


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Navigation />
          <Redirect to={{ pathname: '/login' }} />
          <Router />
        </BrowserRouter>
      </Provider>

    );
  }

}