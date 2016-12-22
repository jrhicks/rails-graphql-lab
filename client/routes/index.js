import React from 'react'
import { Link, Route, IndexRoute } from 'react-router'
import ViewerQuery from '../queries/ViewerQuery'
import AdminPage from '../_Admin/AdminPage';
import UserIndex from '../_Admin/UserIndex';
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
    <Link to="/admin">Admin</Link>
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
    <Route path='admin' component={AdminPage} queries={ViewerQuery} onEnter={requireAuth} >
      <Route path='users' component={UserIndex} queries={ViewerQuery} />
    </Route>
    <Route path='login' component={LoginPage} queries={ViewerQuery} />
  </Route>
)
