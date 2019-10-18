class CreateAVoidances < ActiveRecord::Migration[5.2]
  def change
    create_table :a_voidances do |t|
      t.text :aVoidance, null: false
      t.integer :aVoidance_id, null: false

      t.timestamps
    end
  end
end
