import React from 'react';
import Relay from 'react-relay';
import AccessTokenActions from '../flux/actions/AccessTokenActions';

class CurrentUser extends React.Component {
  render() {
    const current_user = this.props.current_user;
    if (current_user.is_anonymous) {
      return (
        <div>
          <h2>Login</h2>
          <input type="submit" value="login" onClick={()=>AccessTokenActions.setAccessToken('1:FcAT53LxAXzGQgusxNKc')} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome {current_user.email}</h2>
          <input type="submit" value="logout" onClick={()=>AccessTokenActions.setAccessToken(null)} />
        </div>
      );
    }
  }
}

module.exports = Relay.createContainer(CurrentUser, {
  fragments: {
    current_user: () => Relay.QL`
      fragment on CurrentUser {
        is_anonymous
        email
      }`
  }
}
);
