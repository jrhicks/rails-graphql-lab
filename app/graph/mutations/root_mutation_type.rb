RootMutationType = GraphQL::ObjectType.define do
  name "RootMutation"
  description "root mutation"

  field :sign_in_mutation, field: SignInMutation.field
end
