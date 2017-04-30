require 'rails_helper'

RSpec.describe PostController, type: :controller do
  describe "GET #index" do
    let!(:post) { create(:post) }

    context "when format is html" do
      before { get :index }

      it "assigns correctly @posts" do
        expect(assigns(:posts)).to contain_exactly(post)
      end

      it "returns the correct response" do
        expect(response).to be_success
      end

      it "renders the correct template" do
        expect(response).to render_template :index
      end
    end

    context "when format is json" do
      before { get :index, params: { format: :json } }

      it "returns the correct body" do
        expected_body = [
          { id: post.id, title: post.title }
        ].to_json

        expect(response.body).to eq(expected_body)
      end

      it "returns the correct response" do
        expect(response).to be_success
      end

      it "renders the correct template" do
        expect(response).not_to render_template :index
      end
    end
  end

  describe "GET #show" do
    let(:post) { create(:post) }

    before { get :show, params: { id: post.id } }

    it "returns the correct response" do
      expect(response).to be_success
    end

    it "returns the correct post" do
      expect(response.body).to eq(post.to_json)
    end
  end
end
