import Relay from 'react-relay';

class SignInMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {
      signin
    }`;
  }

  getVariables() {
    return {
      email: this.props.email,
      password: this.props.password,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on SignInPayload {
        access_token
        message
      }
    `;
  }

  getConfigs() {
      return [{
        type: 'REQUIRED_CHILDREN',
        // Forces these fragments to be included in the query
        children: [Relay.QL`
          fragment on SignInPayload {
            access_token
            message
          }
        `],
      }];
    }
}

module.exports = SignInMutation;
