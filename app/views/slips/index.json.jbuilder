json.array!(@slips) do |slip|
  json.extract! slip, :id, :image, :value, :from, :description, :city, :signature, :cpf, :rg
  json.url slip_url(slip, format: :json)
end
