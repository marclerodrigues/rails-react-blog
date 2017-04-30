Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root "post#index"

  resources :post, only: :show

  get "*path", to: "post#index"
end
