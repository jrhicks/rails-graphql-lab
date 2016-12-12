import React from 'react';
import Relay from 'react-relay';
import SignInMutation from './SignInMutation';
import AccessTokenActions from '../flux/actions/AccessTokenActions';

class CurrentUser extends React.Component {

  constructor(...params) {
    super(...params);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let onFailure = (transaction) => {
      var error = transaction.getError() || new Error('Mutation failed.');
      console.error(error);
    };

    let onSuccess = (response) => {
      const access_token = response.signin.access_token;
      AccessTokenActions.setAccessToken(access_token);
    }

    Relay.Store.commitUpdate(new SignInMutation({
      email: this.email,
      password: this.password
    }), {onFailure, onSuccess});
  }

  render() {
    const current_user = this.props.current_user;
    if (current_user.is_anonymous) {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
           <label>
             Email:
             <input type="text" ref={(email) => this.email = (email || {}).value} />
           </label>
           <br />
           <label>
             Password:
             <input type="password" ref={(password) => this.password = (password || {}).value} />
           </label>
           <br />
           <input type="submit" value="Submit" />
         </form>
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
