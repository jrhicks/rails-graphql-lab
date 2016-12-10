
import React from 'react'
import { Route, browserHistory } from 'react-router'
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay'
import UserIndex from './UserIndex';

class HomeRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  }
  static routeName = 'HomeRoute';
}

const Renderer = <Relay.Renderer
    environment={Relay.Store}
    Container={UserIndex}
    queryConfig={new HomeRoute()}
  />

ReactDOM.render(Renderer, document.getElementById('react-app'))
