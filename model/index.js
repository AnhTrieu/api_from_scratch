let movies = []

function getAll() {
  return movies
}

function getOne(id) {
  return movies.find(movie => movie.id === id)
}

function create(id, name, genre, rating) {
  let movie = {id, name, genre, rating}
  movies.push(movie)
  return movie
}

function update(id, name, genre, rating) {
  let idx = movies.findIndex(movie => movie.id === id)

  movies[idx].name = name
  movies[idx].genre = genre
  movies[idx].rating = rating

  return movies[idx]
}

function destroy(id) {
  let idx = movies.findIndex(movie => movie.id === id)

  return movies.splice(idx, 1)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
