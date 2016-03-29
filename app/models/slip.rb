class Slip < ActiveRecord::Base
  validates_presence_of :value, :from, :city, :date, :signature
end
