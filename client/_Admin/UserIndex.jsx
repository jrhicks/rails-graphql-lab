import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import UserEntry from './UserEntry';

class UserIndexPage extends React.Component {

  render() {
    return (
      <ul>
        {
          this.props.viewer.admin.users.map( (user) => {
            return <UserEntry key={user.id} user={user} />
          })
        }
      </ul>
    );
  }

}

module.exports = Relay.createContainer(UserIndexPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        admin {
          users {
            id
            ${UserEntry.getFragment('user')}
          }
        }
      }`
  }
});
