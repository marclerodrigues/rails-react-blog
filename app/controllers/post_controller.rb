class PostController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc).select(:id, :title, :created_at).all

    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end
end
