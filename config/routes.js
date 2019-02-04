const router = require('express').Router()
const tvShowsControllet = require('../controllers/tvshows.js')


router.route('/tvshows')
  .get(tvShowsControllet.index)
  .post(tvShowsControllet.create)

router.route('/tvshows/:id')
  .get(tvShowsControllet.show)



module.exports = router
// router.put('/tvshows/:id', (req, res) => res.json({ message: 'edit page' }))
// router.delete('/tvshows/:id', (req, res) => res.json({ message: 'delete page' }))
