import Relay from 'react-relay';

class RelayHomeRoute extends Relay.Route {
  static queries = {
    current_user: () => Relay.QL`query { current_user }`,
  }
  static routeName = 'HomeRoute';
}

module.exports = RelayHomeRoute;
