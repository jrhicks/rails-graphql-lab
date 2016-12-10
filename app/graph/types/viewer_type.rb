ViewerType = GraphQL::ObjectType.define do
  name 'Viewer'
  description 'Support unassociated root queries that fetches collections. Supports fetching posts and users collection'
  interfaces [GraphQL::Relay::Node.interface]
  global_id_field :id

  field :users, UserType.to_list_type do
    description 'Users'
    resolve -> (object, args, ctx) {
      User.all
    }
  end

end
