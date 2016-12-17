RootMutationType = GraphQL::ObjectType.define do
  name "RootMutation"
  description "root mutation"

  field :signin, field: SignInMutation.field
end
