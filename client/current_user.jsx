import React from 'react'
import Relay from 'react-relay'

class CurrentUser extends React.Component {
  render() {
    return <h2>Welcome {this.props.current_user.email}</h2>;
  }
}

module.exports = Relay.createContainer(CurrentUser, {
fragments: {
  current_user: () => Relay.QL`
    fragment on CurrentUser {
      email
    }`
}
});
