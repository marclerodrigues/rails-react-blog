FactoryGirl.define do
  factory :post do
    title { FFaker::Movie.title }
    content { FFaker::Tweet.body }
  end
end
