SignInMutation = GraphQL::Relay::Mutation.define do
  name "SignIn"
  input_field :email, !types.String
  input_field :password, !types.String

  return_field :access_token, types.String
  return_field :message, types.String

  resolve -> (root_obj, args, ctx) {
    @user = User.find_for_database_authentication(email: args[:email])
    if @user
      if @user.valid_password?(args[:password])
        access_token = @user.access_token
        message = nil
      else
        access_token = nil
        message = "Please check your password and try again"
      end
    else
      message = "Please check your email and try again or contact support."
      access_token = nil
    end
    { access_token: access_token, message: message }
  }
end
