
import React from 'react'
import { Route, browserHistory } from 'react-router'
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay'
import UserIndex from './UserIndex';

const token = localStorage.getItem('auth_token');
const headers = { Authorization: '1:FcAT53LxAXzGQgusxNKc' }

class HomeRoute extends Relay.Route {
  static queries = {
    current_user: () => Relay.QL`query { current_user }`,
  }
  static routeName = 'HomeRoute';
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(
    'http://localhost:3000/graphql', {
      headers: headers
    })
);

const Renderer = <Relay.Renderer
    environment={Relay.Store}
    Container={UserIndex}
    queryConfig={new HomeRoute()}
  />

ReactDOM.render(Renderer, document.getElementById('react-app'))
