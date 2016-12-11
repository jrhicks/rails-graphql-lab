import AppDispatcher from '../dispatcher/AppDispatcher';

class AccessTokenActions {

  setAccessToken(accessToken) {
    AppDispatcher.dispatch({
      type: 'setAccessToken',
      data: { accessToken }
    });
  }

}

module.exports = new AccessTokenActions();
