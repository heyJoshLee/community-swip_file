module Api
  module V1
    class TypesController < ApplicationController
      def index
        puts "GETTTTTTTTING!!!!!!"
        types = Type.all
        render json: TypeSerializer.new(types).serialized_json
      end
    end
  end
end