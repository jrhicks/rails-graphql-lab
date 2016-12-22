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

  field :viewer, ViewerType do
    description 'Currently Logged In User'
    resolve -> (object, args, ctx) {
      if (ctx[:current_user])
        return ctx[:current_user]
      else
        anonymous = User.new
        anonymous.is_anonymous = true
        return anonymous
      end
    }
  end
end
