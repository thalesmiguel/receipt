class CreateSlips < ActiveRecord::Migration
  def change
    create_table :slips do |t|
      t.string :image
      t.decimal :value
      t.string :from
      t.text :description
      t.string :city
      t.date :date
      t.string :signature
      t.string :cpf
      t.string :rg

      t.timestamps null: false
    end
  end
end
