AccountType = GraphQL::ObjectType.define do
  name 'Account'
  description 'Users are members of accounts.'
  interfaces [GraphQL::Relay::Node.interface]

  global_id_field :id
  field :name,          !types.String, "The name of this account"
  field :description,   !types.String, "The description of this account"
end
