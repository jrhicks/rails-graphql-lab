Rails.application.routes.draw do
  devise_for :users
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/queries"
  root to: "client#index"
  resources :queries
  resource :sha, only: :show
end
