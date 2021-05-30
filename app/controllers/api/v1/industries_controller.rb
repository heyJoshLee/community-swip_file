module Api
  module V1
    class IndustriesController < ApplicationController
      def index
        industries = Industry.all
        render json: IndustrySerializer.new(industries).serialized_json
      end
    end
  end
end