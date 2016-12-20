import React from 'react'
import ReactDOM from 'react-dom'
import { Router, applyRouterMiddleware, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import Relay from 'react-relay'
import useRelay from 'react-router-relay'
import Routes from './routes'

const token = localStorage.getItem('accessToken')

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql', {
    headers: {
      "Authorization": token
    }
  })
)

const appHistory = useRouterHistory(createHashHistory)()

ReactDOM.render(
  <Router
    render={applyRouterMiddleware(useRelay)}
    routes={Routes}
    forceFetch={true}
    history={appHistory}
    environment={Relay.Store} />,
  document.getElementById('react-app')
)
