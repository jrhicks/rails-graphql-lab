AdminType = GraphQL::ObjectType.define do
  name 'Admin'
  description 'Current admin user.'
  interfaces [GraphQL::Relay::Node.interface]
  global_id_field :id

  field :accounts, types[AccountType] do
    resolve -> (object, args, ctx) {
      if ctx[:current_user].is_super
        Account.all
      else
        Account.none
      end
    }
  end

  field :users, types[UserType] do
    resolve -> (object, args, ctx) {
      if ctx[:current_user].is_super
        User.all
      else
        User.none
      end
    }
  end

end
