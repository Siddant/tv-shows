const router = require('express').Router()

router.get('/', (req, res) => res.json({ message: 'HOMEPAGE' }))
router.post('/tvshows', (req, res) => res.json({ message: 'Create page' }))
router.get('/tvshows/:id', (req, res) => res.json({ message: 'Show page' }))
router.put('/tvshows/:id', (req, res) => res.json({ message: 'edit page' }))
router.delete('/tvshows/:id', (req, res) => res.json({ message: 'delete page' }))
