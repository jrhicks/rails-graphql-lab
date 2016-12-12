import React from 'react';
import Relay from 'react-relay';
import SignInMutation from './SignInMutation';

class Viewer extends React.Component {

  constructor(...params) {
    super(...params);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogout() {
    console.log('logout');
    localStorage.setItem('accessToken', null);
    window.location = '/';
  }

  handleSubmit(event) {
    event.preventDefault();
    let onFailure = (transaction) => {
      var error = transaction.getError() || new Error('Mutation failed.');
      console.error(error);
    };

    let onSuccess = (response) => {
      const access_token = response.signin.access_token;
      localStorage.setItem('accessToken', access_token);
      window.location = '/';
    }

    console.log({email: this.email})

    Relay.Store.commitUpdate(new SignInMutation({
      email: this.email.value,
      password: this.password.value
    }), {onFailure, onSuccess});
  }

  render() {
    const viewer = this.props.viewer;
    if (viewer.is_anonymous) {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
           <label>
             Email:
             <input type="text" ref={(email) => this.email = email} />
           </label>
           <br />
           <label>
             Password:
             <input type="password" ref={(password) => this.password = password} />
           </label>
           <br />
           <input type="submit" value="Submit" />
         </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome {viewer.email}</h2>
          <input type="submit" value="logout" onClick={this.handleLogout} />
        </div>
      );
    }
  }
}

module.exports = Relay.createContainer(Viewer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        is_anonymous
        email
      }`
  }
}
);
