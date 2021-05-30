module Api
  module V1
    class PostsController < ApplicationController

      def index
        posts = Post.all
        render json: PostSerializer.new(posts).serialized_json
      end
    end

    def show
      post = Post.find(params[:id])
      render json: PostSerializer.new(post).serialized_json
    end

    def create 
      post = Post.new(post_params)

      if post.save
        render json: PostSerializer.new(post).serialized_json
      else
        render json: {error: post.errors.messsages}
      end
    end

    def update
      post = Post.find(params[:id])
      if post.update(post_params)
        render json: PostSerializer.new(post).serialized_json
      else
        render json: { error: post.errors.messages }
      end
    end

    def destroy
      post = Post.find(params[:id])

      if post.destroy
        head :no_content
      else
        render json: { error: post.errors.messages }
      end
    end

    private 
    
    def post_params
      params.require(:post).permit(:title, :body)
    end
  end
end