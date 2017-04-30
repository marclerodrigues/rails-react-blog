class CommentController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @comments = Comment.where(post_id: params[:post_id])

    render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors
    end
  end

  private

  def comment_params
    params.permit(:username, :content, :post_id)
  end
end
