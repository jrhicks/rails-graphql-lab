import Relay from 'react-relay';

class RelayHomeRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  }
  static routeName = 'HomeRoute';
}

module.exports = RelayHomeRoute;
