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
  field :admin, AdminType do
    description 'Logged In User with Admin Priveledges'
    resolve -> (object, args, ctx) {
      current_user = ctx[:current_user]
      if current_user && current_user.is_super
        return current_user
      else
        return null
      end
    }
  end
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
