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
function deleteTvshows(req, res){
  Tvshows
    .findById(req.params.id)
    .then(tvshows => tvshows.set(req.body))
    .then(tvshows => tvshows.save())
    .then(tvshows => res.status(200).json(tvshows))
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: getIndex,
  create: createTvshows,
  show: showTvshows,
  delete: deleteTvshows
}
