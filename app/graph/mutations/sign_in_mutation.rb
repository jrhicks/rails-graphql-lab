SignInMutation = GraphQL::Relay::Mutation.define do
  name "SignIn"
  input_field :email, !types.String
  input_field :password, !types.String

  return_field :access_token, types.String

  resolve -> (args, ctx) {
    @user = User.find_for_database_authentication(email: args[:email])
    access_token = if @user.valid_password?(args[:password])
      @user.access_token
    end
    { access_token: access_token }
  }
end
