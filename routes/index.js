let express = require('express')
let router = express.Router()
let ctrl = require('../controller')

router.get('/', ctrl.getAllMovies)
router.get('/:id', ctrl.getMovie)
router.post('/', ctrl.createMovie)
router.patch('/:id', ctrl.updateMovie)
router.delete('/:id', ctrl.destroyMovie)

module.exports = router
