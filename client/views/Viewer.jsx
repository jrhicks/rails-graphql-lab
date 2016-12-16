import React from 'react';
import Relay from 'react-relay';
import LoginPage from './Login/LoginPage';

class Viewer extends React.Component {

  constructor(...params) {
    super(...params);
  }

  handleLogout() {
    console.log('logout');
    localStorage.setItem('accessToken', null);
    window.location = '/';
  }

  render() {
    const viewer = this.props.viewer;
    if (viewer.is_anonymous) {
      return (
        <LoginPage />
      );
    } else {
      return (
        <div>
          <h2>Welcome {viewer.email}</h2>
          <input type="submit" value="logout" onClick={this.handleLogout} />
        </div>
      );
    }
  }
}

module.exports = Relay.createContainer(Viewer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        is_anonymous
        email
      }`
  }
}
);
