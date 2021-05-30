class AddColumnsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :type, :string
    add_column :posts, :industry, :string
  end
end
