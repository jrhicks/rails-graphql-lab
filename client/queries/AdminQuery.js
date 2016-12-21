import Relay from 'react-relay'

export default {
  admin: () => Relay.QL`query { admin }`,
}
