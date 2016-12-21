import React from 'react';
import Relay from 'react-relay';

class UserEntry extends React.Component {

  static propTypes = {
    user: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onAction = () => {
    const { relay } = this.props;
  }

  render() {
    const { email } = this.props.user;
    return <li> Email: { email } </li>;
  }
}

module.exports = Relay.createContainer(UserEntry, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id
        email
      }`
  }
});
