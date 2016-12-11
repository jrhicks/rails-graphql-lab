import Relay from 'react-relay';
import AccessTokenStore from './flux/stores/AccessTokenStore';

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
    req.headers['Authorization'] = AccessTokenStore.getAccessToken();
    return next(req);
  }
], { disableBatchQuery: true }));
