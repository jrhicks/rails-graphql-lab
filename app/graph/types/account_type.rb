AccountType = GraphQL::ObjectType.define do
  name 'Account'
  description 'Users are members of accounts.'

  field :id,            !types.ID, "The unique ID of this account"
  field :name,          !types.String, "The name of this account"
  field :description,   !types.String, "The description of this account"
end
