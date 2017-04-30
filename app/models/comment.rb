class Comment < ApplicationRecord
  belongs_to :post

  validates :username, :content, presence: true
end
