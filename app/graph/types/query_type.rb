# type Query {
#   hero: Character
#   human(id: String!): Human
#   droid(id: String!): Droid
# }
QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :hello do
    type !types.String
    resolve -> (obj, args, ctx) { 'Hello world!' }
  end

end
