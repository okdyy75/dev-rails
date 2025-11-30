class AddTagsToTodos < ActiveRecord::Migration[7.2]
  def change
    add_column :todos, :tags, :string, array: true, default: [], null: false
  end
end
