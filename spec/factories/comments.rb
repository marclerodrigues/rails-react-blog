FactoryGirl.define do
  factory :comment do
    username { FFaker::Internet.user_name }
    content { FFaker::Skill.specialty }
    post
  end
end
