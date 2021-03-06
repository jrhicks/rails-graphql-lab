import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class AdminPage extends React.Component {

  constructor(...params) {
    super(...params);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }

}

module.exports = Relay.createContainer(AdminPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        admin {
          users {
            id
          }
        }
      }`
  }
});
