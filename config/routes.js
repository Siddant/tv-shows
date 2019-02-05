const router = require('express').Router()
const tvShowsController = require('../controllers/tvshows.js')


router.route('/tvshows')
  .get(tvShowsController.index)
  .post(tvShowsController.create)

router.route('/tvshows/:id')
  .get(tvShowsController.show)
  .delete(tvShowsController.delete)



module.exports = router
// router.put('/tvshows/:id', (req, res) => res.json({ message: 'edit page' }))
// router.delete('/tvshows/:id', (req, res) => res.json({ message: 'delete page' }))
