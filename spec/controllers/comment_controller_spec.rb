require 'rails_helper'

RSpec.describe CommentController, type: :controller do
  let(:user_post) { create(:post) }

  describe "GET #index" do
    let!(:comment) { create(:comment, post: user_post) }

    before do
      get :index, params: { post_id: user_post.id, format: :json }
    end

    it "returns the correct comments" do
      expected_comments = [
        comment
      ].to_json

      expect(response.body).to eq(expected_comments)
    end

    it "returns the correct response" do
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      let(:comment_params) { attributes_for(:comment, post_id: user_post.id) }

      it "creates a new comment" do
        expect do
          post :create, params: comment_params
        end.to change(Comment, :count).by(1)
      end

      it "creates correctly the comment" do
        post :create, params: comment_params
        expect(Comment.last).to have_attributes(comment_params)
      end

      it "returns the correct response" do
        expect(response).to be_success
      end
    end

    context "with invalid attributes" do
      [:username, :content].each do |param|
        context "when #{param} is invalid" do
          let(:comment_params) { attributes_for(:comment, "#{param}": nil, post_id: user_post.id) }

          before do
            post :create, params: comment_params
          end

          it "returns the correct response body" do
            expected_body = {
              "#{param}": ["can't be blank"]
            }.to_json

            expect(response.body).to eq(expected_body)
          end
        end
      end
    end
  end
end
