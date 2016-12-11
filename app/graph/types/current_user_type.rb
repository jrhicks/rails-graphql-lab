CurrentUserType = GraphQL::ObjectType.define do
  name 'CurrentUser'
  description 'Currently authenticated user.'
  interfaces [GraphQL::Relay::Node.interface]
  global_id_field :id

  field :email, !types.String, "The email address of the currently logged in User"

end
