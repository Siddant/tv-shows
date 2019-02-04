require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ message: 'HOMEPAGE' }))
app.post('/tvshows', (req, res) => res.json({ message: 'Create page' }))
app.get('/tvshows/:id', (req, res) => res.json({ message: 'Show page' }))
app.put('/tvshows/:id', (req, res) => res.json({ message: 'edit page' }))
app.delete('/tvshows/:id', (req, res) => res.json({ message: 'delete page' }))


mongoose.connect('mongodb://localhost/tv-shows-db')


app.listen(process.env.PORT, () => console.log('Express is listening on port 4000'))
