import * as React from 'react';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SocketListener from './view/components/unimaginable/SocketListenerComponent';

export default class App extends React.Component<any> {

  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <SocketListener />
        </BrowserRouter>
      </Provider>
    );
  }

}