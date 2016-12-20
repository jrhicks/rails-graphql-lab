Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/queries"
  root to: "client#index"
  resources :queries
  resource :sha, only: :show
  scope '/graphql' do
    post"/", to: "queries#create"
  end
  devise_for :users
end
