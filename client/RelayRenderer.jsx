import React from 'react'
import Relay from 'react-relay';
import Login from './views/Login';
import AccessTokenStore from './flux/stores/AccessTokenStore';
import RelayHomeRoute from './RelayHomeRoute';
import RelayNetworkLayer from './RelayNetworkLayer';

class RelayRenderer extends React.Component {

  constructor(...params) {
    super(...params);
    this.state = {
      accessToken: AccessTokenStore.getAccessToken()
    };
    this.__onChange = this.__onChange.bind(this);

  }

  componentDidMount() {
    this.remove = AccessTokenStore.addListener(this.__onChange);
  }

  componentWillUnmount() {
    this.remove();
  }

  __onChange() {
    this.setState({
      forceFetch: true,
      accessToken: AccessTokenStore.getAccessToken()
    })
  }

  render() {
    setTimeout(()=>this.setState({forceFetch: false}),0);
    return (
      <Relay.Renderer
          environment={Relay.Store}
          Container={Login}
          queryConfig={new RelayHomeRoute()}
          forceFetch={this.state.forceFetch}
        />
    )
  }
}

module.exports = RelayRenderer;
