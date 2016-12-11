class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  include Pundit

  def authenticate_user_from_token!
    auth_token = request.headers['Authorization']
    # return authentication_error unless auth_token
    authenticate_with_auth_token auth_token if auth_token.present? && auth_token != "null"
  end

  def authenticate_with_auth_token(auth_token)
    # return if the token does not have the right format
    return authentication_error unless auth_token.include?(':')

    # Find the user by splitting the token and finding by id
    # Again, not the most secure way to do it, but works as an example.
    user_id = auth_token.split(':').first
    user = User.where(id: user_id).first

    # Use secure_compare to mitigate timing atttacks
    if user && Devise.secure_compare(user.access_token, auth_token)
      sign_in user, store: false
    else
      authentication_error
    end
  end

  def authentication_error
    render json: {error: 'unauthorized'}, status: :unauthorized
  end

end
