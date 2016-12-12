import Relay from 'react-relay';

import {
  RelayNetworkLayer, retryMiddleware, urlMiddleware, authMiddleware, loggerMiddleware,
  perfMiddleware, gqErrorsMiddleware
} from 'react-relay-network-layer';

Relay.injectNetworkLayer(new RelayNetworkLayer([
  urlMiddleware({
    url: (req) => '/graphql',
  }),
  // example of the custom inline middleware
  next => req => {
    req.headers['Authorization'] = localStorage.getItem('accessToken');
    return next(req);
  }
], { disableBatchQuery: true }));
