class Slip < ActiveRecord::Base
  
  # validates :value, :format => { :with => /\A\d+(?:\.\d{0,2})?\z/ }
  validates_presence_of :value, :from, :city, :date, :signature
  # monetize :value

end
