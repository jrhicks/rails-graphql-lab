import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ViewerQuery from '../queries/ViewerQuery'
import LoginPage from '../_Login/LoginPage';
import Relay from 'react-relay';

function requireAuth(nextState, replace) {
  const accessToken = localStorage.getItem('accessToken')
    if (accessToken === null) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}


class Home extends React.Component {
  render() {
    return <div>
      {
        JSON.stringify(this.props.viewer, null, 2)
      }
    </div>;
  }
}

const HomeContainer = Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        is_anonymous
        email
      }`
  }
});

module.exports = (
  <Route path='/'>
    <IndexRoute component={HomeContainer} queries={ViewerQuery} onEnter={requireAuth} />
    <Route path='login' component={LoginPage} queries={ViewerQuery} />
  </Route>
)
