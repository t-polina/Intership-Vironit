import * as React from 'react';
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Router from './router'
import Navigation from './components/navigation'

export default class App extends React.Component<any> {

  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }

}