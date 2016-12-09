# type Query {
#   hero: Character
#   human(id: String!): Human
#   droid(id: String!): Droid
# }
QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :user do
    type UserType
    argument :id, !types.ID
    description "Find a User by ID"
    resolve -> (obj, args, ctx) {
      User.find(args["id"])
    }
  end

  field :accounts, types[AccountType] do
    resolve -> (obj, args, ctx) {
      Account.all
    }
  end

  field :users, types[UserType] do
    resolve -> (obj, args, ctx) {
      User.all
    }
  end

  field :hello do
    type !types.String
    resolve -> (obj, args, ctx) { 'Hello world!' }
  end

end
