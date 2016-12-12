import React from 'react';
import Relay from 'react-relay';
import Viewer from './views/Viewer';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

class BrokenPage extends React.Component {
  render() {
    return <h2>Broken Page</h2>;
  }
}

class LoadingPage extends React.Component {
  render() {
    return <h2>Loading Page</h2>;
  }
}

const routes = [
  {
    path: '/',
    component: Viewer,
    queries: ViewerQueries,
    childRoutes: [
    ],
  },
];


// add loaders and error catcher for all routes, also for nested routes if will exist
function addLoaderForRelayComponents(routeList) {
  function addLoader(route) {
    if (route.queries && route.component && !route.render) {
      route.render = (o) => { // eslint-disable-line
        if (o.props) {
          return React.createElement(route.component, o.props);
        }

        if (o.error) {
          return <BrokenPage message={o.error.message} />;
        }

        return <LoadingPage />;
      };
    }
  }

  routeList.forEach(route => {
    if (route.indexRoute) {
      addLoader(route.indexRoute);
    }
    addLoader(route);

    if (route.childRoutes && Array.isArray(route.childRoutes)) {
      addLoaderForRelayComponents(route.childRoutes);
    }
  });
}

addLoaderForRelayComponents(routes);


module.exports = routes;
