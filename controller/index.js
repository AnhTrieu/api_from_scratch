let uuid = require('uuid/v4')
let model = require('../model')

function getAllMovies(req, res, next) {
  res.status(200).json(model.getAll())
}

function getMovie(req, res, next) {
  let id = req.params.id
  let movie = model.getOne(id)

  if (!movie) return next({status: 404, message: 'Not Found!'})

  res.status(200).json({data: movie})
}

function createMovie(req, res, next) {
  let name = req.body.name
  let genre = req.body.genre
  let id = uuid()

  if (!name || !genre) return next({status: 400, message: 'Missing Input.'})

  let movie = model.create(id, name, genre, rating)

  res.status(201).json({data: movie})
}

function updateMovie(req, res, next) {
  let id = req.params.id
  let name = req.body.name
  let genre = req.body.genre
  let rating = req.body.rating

  if (!name || !genre) return next({status: 400, message: 'Missing Input.'})

  let updated = model.update(id, name, genre, rating)

  if (!updated) return next({status: 404, message: 'Not Found!'})

  res.status(200).json({data: updated})
}

function destroyMovie(req, res, next) {
  let id = req.params.id
  let deleted = model.destroy(id)

  if (!deleted.length) return next({status: 404, message: 'Not Found!'})

  res.status(204).json()
}

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  destroyMovie
}
