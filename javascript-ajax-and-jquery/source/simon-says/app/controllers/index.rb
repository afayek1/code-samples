register Mustache::Sinatra

get '/' do
	mustache :index
end

#Create and return a JSON object with a random cell and color given below.
post '/color' do
  NUMBER_OF_SQUARES = 9
  cell = rand(1..NUMBER_OF_SQUARES)
  color = "#" + "%06x" % (rand * 0xffffff)
  {cell: cell, color: color}.to_json
end