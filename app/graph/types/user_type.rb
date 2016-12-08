UserType = GraphQL::ObjectType.define do
  name 'User'
  description 'A person who uses our app'

  field :id,            !types.ID, "The unique ID of this person"
  field :email,          !types.String, "The name of this person"
end
