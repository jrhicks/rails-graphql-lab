# type Query {
#   hero: Character
#   human(id: String!): Human
#   droid(id: String!): Droid
# }
QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"
  interfaces [GraphQL::Relay::Node.interface]
  field :node, GraphQL::Relay::Node.field
  field :current_user, CurrentUserType do
    description 'Currently Logged In User'
    resolve -> (object, args, ctx) {
      ctx[:current_user]
    }
  end
end
