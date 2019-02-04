const Tvshows = require('../models/tvshows')


function getIndex(req, res){
  Tvshows
    .find()
    .then(tvshows => res.json( tvshows ))
}

function createTvshows(req, res){
  Tvshows
    .create(req.body)
    .then(tvshows  => res.status(201).json(tvshows))
    .catch(err => res.status(422).json(err))
}

function showTvshows(req, res){
  Tvshows
    .findById(req.params.id)
    .then(tvshows  => res.status(200).json(tvshows))
}

module.exports = {
  index: getIndex,
  create: createTvshows,
  show: showTvshows
}
