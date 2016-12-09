UserType = GraphQL::ObjectType.define do
  name 'User'
  description 'A person who uses our app'
  interfaces [GraphQL::Relay::Node.interface]

  global_id_field :id
  field :email,          !types.String, "The name of this person"
end
