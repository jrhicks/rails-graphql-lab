ViewerType = GraphQL::ObjectType.define do
  name 'Viewer'
  description 'Currently authenticated user.'
  interfaces [GraphQL::Relay::Node.interface]
  global_id_field :id

  field :email, !types.String, "The email address of the currently logged in User"
  field :is_anonymous,   types.Boolean, "Flag to represent an anonymous user."
  field :is_super, types.Boolean, "Super user priveledges, able to create accounts and users."

  connection :accounts, types[!AccountType]

  field :admin, AdminType do
    description 'Logged In User with Admin Priveledges'
    resolve -> (object, args, ctx) {
      current_user = ctx[:current_user]
      if current_user && current_user.is_super
        return current_user
      else
        return null
      end
    }
  end

end
