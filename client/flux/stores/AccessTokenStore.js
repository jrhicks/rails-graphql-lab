import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

const state = {};
try {
  state.accessToken = localStorage.getItem('accessToken');
} catch (err) {
  state.accessToken = undefined;
}

class AccessTokenStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
  }

  getAccessToken() {
    return state.accessToken;
  }

  setAccessToken(accessToken) {
    state.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }

  __onDispatch(action) {
    switch (action.type) {
      case 'setAccessToken':
        console.log({ action });
        this.setAccessToken(action.data.accessToken);
        this.__emitChange();
        break;
      default:
        break;
    }
  }
}

module.exports = new AccessTokenStore(AppDispatcher);
