require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const routes = require('./config/routes')

const Tvshows = require('./models/tvshows')


app.use(bodyParser.json())

app.get('/', (req, res) => {
  Tvshows
    .find()
    .then(tvshows => res.json( tvshows ))
})

app.post('/tvshows', (req, res) => {
  Tvshows
    .create(req.body)
    .then(tvshows  => res.status(201).json(tvshows))
    .catch(err => res.status(422).json(err))
})


app.get('/tvshows/:id', (req, res) => res.json({ message: 'Show page' }))
app.put('/tvshows/:id', (req, res) => res.json({ message: 'edit page' }))
app.delete('/tvshows/:id', (req, res) => res.json({ message: 'delete page' }))


mongoose.connect('mongodb://localhost/tv-shows-db')


app.listen(process.env.PORT, () => console.log('Express is listening on port 4000'))
