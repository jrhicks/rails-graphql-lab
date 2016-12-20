class RenameIsAdminToIsSuper < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :is_admin, :is_super
  end
end
