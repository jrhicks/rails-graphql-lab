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
    description 'Root object to get viewer related collections'
    resolve -> (obj, args, ctx) { Viewer::STATIC }
  end
end
