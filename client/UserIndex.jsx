import React from 'react'
import Relay from 'react-relay'

class UserIndex extends React.Component {
  render() {
    const users = this.props.viewer.users;
    return (
      <ul>
        {
        users.map( (u) => {
          return <li key={u.id}>{u.email}</li>
        })
        }
      </ul>
    )
  }
}

module.exports = Relay.createContainer(UserIndex, {
fragments: {
  viewer: () => Relay.QL`
    fragment on Viewer {
      users {
        id
        email
      }
    }`
}
});
