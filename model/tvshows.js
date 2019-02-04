const mongoose = require('mongoose')

const tvshows = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  genre: {type: String, required: true},
  year: {type: String, required: true},
  stars: {type: String, required: true},
  ratings: {type: String, required: true},
  runtime: {type: String},
  plot: {type: String}
})

module.exports =  mongoose.model('TvShows', tvshows)
