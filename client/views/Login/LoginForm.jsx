import React from 'react';
import Relay from 'react-relay';
import SignInMutation from './SignInMutation';

import {
  Form, Input, Button
} from 'react-lightning-design-system';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    let onSuccess = (response) => {
      const access_token = response.signin.access_token;
      localStorage.setItem('accessToken', access_token);
      if (access_token !== undefined ) {
        alert(access_token);
        window.location = '/';
      }
    }

    let onFailure = (response) => {
      console.log('FAILURE');
      console.log(response);
    }

    let mutation = new SignInMutation({
      email: this.state.email,
      password: this.state.password
    });

    Relay.Store.commitUpdate( mutation, {onFailure, onSuccess});
  }

  render() {
    const error = false;
    // The display none input button captures onSubmit events
    return (
      <Form onSubmit={this.onSubmit}>
        <Input label='Email' type='text' required={ true } error={ error }
          onChange={(e, email)=>this.setState({email})} />
        <Input label='Password' type='password' required={ true } error={ error }
          onChange={(e, password)=>this.setState({password})} />
        <input type="submit" style={{display: 'None'}} />
        <Button type='brand' onClick={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}

module.exports = LoginForm;
